
const CACHE_NAME = 'network-or-cache-v1';
var urlsToCache = [
    '/',
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



// кеш и обработка запросов
/* 
  1.В метод event.respondWith() передаем промис, возвращаемый caches.match().
  2.Метод caches.match() ищет совпадение во всех кешах, созданных Service Worker’ом.
  3.если нужный ответ есть в кеше, возвращаем его, если нет, отправляем сетевой запрос.
*/ 

//  (кеш и обработка запросов)


self.addEventListener('fetch', function(event) {
    console.log("зашел в обработчик fetch");
    console.log("event.request=",event.request);
    
    event.respondWith(
      caches.match(event.request)
      .then(function(response) {
        //если нужный ресурс есть в кеше
        //FIXME:
        // caches.match не нашел в кеше совпадение почему ?
        /* if не срабат.!!!  и  response=underfined */ 
        /* информация из кеша не отдается !!!! */
          console.log("response=",response);
          if (response) {
            return response;
          }
          return fetch(event.request);
        }
      )
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
self.addEventListener('activate', (event) => {
    console.log('зашел в обработчик activate');
    var cacheWhitelist = ['pages-cache-v1', 'blog-posts-cache-v1'];

  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.map(function(cacheName) {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});


 
