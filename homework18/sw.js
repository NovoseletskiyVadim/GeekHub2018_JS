
const CACHE_NAME = 'network-or-cache-v1';
const timeout = 400;
var urlsToCache = [
    '/',
    './app/css/main.css',
    './app/css/style.css',
    './app/js/fetch.js',
    './app/js/loader.js',
    './index.html'
  ];
  

// В файле sw.js нам нужно лишь определить базовые события, на которые будет реагировать SW.

// При установке воркера мы должны закешировать часть данных (статику).

// вариант 2
self.addEventListener('install', function(event) {
    // установка
    console.log('Установлен');

    event.waitUntil(
      caches.open(CACHE_NAME)
        .then(function(cache) {
          console.log('Opened cache');
          return cache.addAll(urlsToCache);
        })
    );
  });

self.addEventListener('activate', (event) => {
    console.log('Активирован');
});



self.addEventListener('fetch', function(event) {
    event.respondWith(
      caches.match(event.request)
        .then(function(response) {
          // ресурс есть в кеше
          if (response) {
            return response;
          }
  
          /* Важно: клонируем запрос. Запрос - это поток, может быть обработан только раз.
           Если мы хотим использовать объект request несколько раз, его нужно клонировать */
          var fetchRequest = event.request.clone();
  
          return fetch(fetchRequest).then(
            function(response) {
              // проверяем, что получен корректный ответ
              if(!response || response.status !== 200 || response.type !== 'basic') {
                return response;
              }
  
              /* ВАЖНО: Клонируем ответ. Объект response также является потоком. */
              var responseToCache = response.clone();
  
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


// вариант 1 
// self.addEventListener('install', (event) => {
//     console.log('Установлен');

//     event.waitUntil(
//         caches.open(CACHE_NAME).then((cache) => cache.addAll([
//             '/',
//             './app/css/main.css',
//             './app/css/style.css',
//             './app/js/fetch.js',
//             './app/js/loader.js',
//             './index.html'
//         ])
//     ));
// });

// при событии fetch, мы и делаем запрос, но используем кэш, только после истечения timeout.
  
// self.addEventListener('fetch', (event) => {
//     console.log('Происходит запрос на сервер');
//     event.respondWith(fromNetwork(event.request, timeout)
//       .catch((err) => {
//           console.log(`Error: ${err.message()}`);
//           return fromCache(event.request);
//       }));
// });

// Временно-ограниченный запрос.

// function fromNetwork(request, timeout) {
//     return new Promise((fulfill, reject) => {
//         var timeoutId = setTimeout(reject, timeout);
//         fetch(request).then((response) => {
//             clearTimeout(timeoutId);
//             fulfill(response);
//         }, reject);
//     });
// }


// function fromCache(request) {
// // Открываем наше хранилище кэша (CacheStorage API), выполняем поиск запрошенного ресурса.
// // Обратите внимание, что в случае отсутствия соответствия значения Promise выполнится успешно, но со значением `undefined`
//     return caches.open(CACHE_NAME).then((cache) =>
//         cache.match(request).then((matching) =>
//             matching || Promise.reject('no-match')
//     ));
// }