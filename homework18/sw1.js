
const CACHE_NAME = 'network-or-cache-v1';
var urlsToCache = [
    
    'app/css/main.css',
    'app/css/style.css',
    'app/js/loader.js',
    'index.html'
  ];
  

// В файле sw.js нам нужно лишь определить базовые события, на которые будет реагировать SW.
// При установке воркера мы должны закешировать часть данных (статику).



/* 
    обработчик install 
    1. Открыть кеш.
    2.Закешировать файлы.
    3.Подтвердить, что все необходимые ресурсы были закешированы.

*/
self.addEventListener('install', function(event) {
    // установка
    console.log('установка');

    /*Метод event.waitUntil() принимает промис и использует его, чтобы определить,
     успешно ли прошла установка.  */
    event.waitUntil(
      caches.open(CACHE_NAME)
        .then(function(cache) {
          console.log('Opened cache');
          return cache.addAll(urlsToCache);
        })
    );
  });



// кеш и обработка запросов
/* 
  1.В метод event.respondWith() передаем промис, возвращаемый caches.match().
  2.Метод caches.match() ищет совпадение во всех кешах, созданных Service Worker’ом.
  3.если нужный ответ есть в кеше, возвращаем его, если нет, отправляем сетевой запрос.
*/ 

// variant 1 


// self.addEventListener('fetch', function(event) {
//     console.log("i am in the fetch");
//     event.respondWith(
//       caches.match(event.request)
//         .then(function(response) {
//           //если нужный ресурс есть в кеше
//             //FIXME:
//             /* if не срабат.!!!  и  response2=underfined почему?*/ 
//           if (response) {
//             console.log(" response1=",response);
//             return response;
//           }
//           console.log(" response2=",response);
//           return fetch(event.request);
//         }
//       )
//     );
//   });



// variant 2

/* Пример ниже кеширует результаты запросов: */

/* 
  1.Добавляем обработчик then для метода fetch().
  2.Получив ответ, убеждаемся, что он валидный, статус ответа 200, а тип ответа равен basic. 
    Тип basic означает, что ответ получен с нашего домена, ресурсы с других доменов не будут 
    кешироваться.
  3. Если проверки пройдены, клонируем ответ, сохраняем копию в кеш, а оригинальный ответ возвращаем браузеру.
 */




self.addEventListener('fetch', function(event) {
    console.log("i am in the fetch");
    event.respondWith(
      caches.match(event.request)
        .then(function(response) {
          // ресурс есть в кеше
        //   console.log(" response=",response);  

          if (response) {
            console.log("зашел если ресурс в кеше. response=",response);  
            return response;
          }
  
          /* Важно: клонируем запрос. Запрос - это поток, может быть обработан только раз.
           Если мы хотим использовать объект request несколько раз, его нужно клонировать */
          var fetchRequest = event.request.clone();
  
          console.log(" response=",response);  
          return fetch(fetchRequest).then(
              
            function(response) {

              /* ВАЖНО: Клонируем ответ. Объект response также является потоком. */
              var responseToCache = response.clone();
              
              // проверяем, что получен корректный ответ
              if(!response || response.status !== 200 || response.type !== 'basic') {
                return response;
              }
  
              
  
              caches.open(CACHE_NAME)
                .then(function(cache) {
                  cache.put(event.request, responseToCache);
                });
  
              return response;
            }
          );
        })
      );
  });

self.addEventListener('activate', (event) => {
    console.log('Активирован');
});


 
