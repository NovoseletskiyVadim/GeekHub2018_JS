var CACHE_NAME = 'network-or-cache-v1';
var urlsToCache = [
  './',
  './index.html',
  './app/css/style.css',
  './app/js/loader.js',
  
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
    console.log(' зашел в обработчик install');

    /*Метод event.waitUntil() принимает промис и использует его, чтобы определить,
     успешно ли прошла установка.  */
    event.waitUntil(
      caches.open(CACHE_NAME)
        .then(function(cache) {
          console.log('Загрузил кеш');
          return cache.addAll(urlsToCache);
        })
    );
  });




// variant 2(кеш и обработка запросов)

/* Пример ниже кеширует результаты запросов: */

/* 
  1.Добавляем обработчик then для метода fetch().
  2.Получив ответ, убеждаемся, что он валидный, статус ответа 200, а тип ответа равен basic. 
    Тип basic означает, что ответ получен с нашего домена, ресурсы с других доменов не будут 
    кешироваться.
  3. Если проверки пройдены, клонируем ответ, сохраняем копию в кеш, а оригинальный ответ 
    возвращаем браузеру.
 */




self.addEventListener('fetch', function(event) {
  console.log(' зашел в обработчик fetch');
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        // ресурс есть в кеше
        if (response) {
          console.log('if (response) response=',response);
          console.log('проверка , ресурс есть в кеше' );
          // оригинальный ответ возврашаем браузеру 
          return response;
        }

        /* Важно: клонируем запрос. Запрос - это поток, может быть обработан только раз. 
        Если мы хотим использовать объект request несколько раз, его нужно клонировать */
        // FIXME:var fetchRequest = event.request.clone();
        var fetchRequest = event.request;

        return fetch(fetchRequest).then(
          function(response) {
            // проверяем, что получен корректный ответ
            // если ответ не коректный, (наверное возвращаем, то что в кеше) 
            if(!response || response.status !== 200 ) {
              console.log('если ответ не коректный:   !response/ || response.status !== 200 || response.type !== "basic"')
              console.log('то : return response=',response);
              return response;
            }

            

            /* ВАЖНО: Клонируем ответ. Объект response также является потоком. */
            var responseToCache = response.clone();
            console.log('Если проверки пройдены:1. Клонируем ответ в responseToCache=',responseToCache);

            // записывает ответ в кеш
            caches.open(CACHE_NAME)
              .then(function(cache) {
                console.log('Если проверки пройдены:2. сохраняем в кеш:' )
                console.log('event.request=',event.request);
                console.log('responseToCache=', responseToCache);

                cache.put(event.request, responseToCache);
              });
            
            // возвращает браузеру оригинальный ответ
            console.log('Если проверки пройдены: 3. возвращаем браузеру оригинальынй ответ  response=',response)
            return response;
          }
        );
      })
    );
});


// Обновление Service Worker’а

/* 
  1.Когда пользователь заходит на сайт, браузер пытается повторно скачать файл Service Worker’а. 
    Если новый файл отличается от текущего, Service Worker считается новым. 
  2.Если Service Worker новый, срабатывает событие install.
  3.На этом этапе старый Service Worker по прежнему контролирует страницу, 
    тогда как новый переходит в состояние waiting.
    Когда текущие открытые страницы сайта будут закрыты,
    старый Service Worker будет убит, а новый получит контроль.
  */


/* Когда новый Service Worker получит контроль над страницей, сработает событие activate. */
/* В обработчике activate целесообразно реализовывать удаление ненужных кешей.  */
// self.addEventListener('activate', (event) => {
//     console.log('зашел в обработчик activate');
//     var cacheWhitelist = ['pages-cache-v1', 'blog-posts-cache-v1'];

//   event.waitUntil(
//     caches.keys().then(function(cacheNames) {
//       return Promise.all(
//         cacheNames.map(function(cacheName) {
//           if (cacheWhitelist.indexOf(cacheName) === -1) {
//             return caches.delete(cacheName);
//           }
//         })
//       );
//     })
//   );
// });


 
