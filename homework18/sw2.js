const CACHE_NAME = 'network-or-cache-v1';
const timeout = 400;
var urlsToCache = [
    
    'app/css/main.css',
    'app/css/style.css',
    'app/js/loader.js',
    'index.html'
  ];


self.addEventListener('install', (event) => {
    console.log('Установлен');

    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => cache.addAll([
            '/',
            './app/css/main.css',
            './app/css/style.css',
            './app/js/fetch.js',
            './app/js/loader.js',
            './index.html'
        ])
    ));
});

// при событии fetch, мы и делаем запрос, но используем кэш, только после истечения timeout.
  
self.addEventListener('fetch', (event) => {
    console.log('Происходит запрос на сервер');
    event.respondWith(fromNetwork(event.request, timeout)
      .catch((err) => {
          console.log(`Error: ${err.message()}`);
          return fromCache(event.request);
      }));
});

// Временно-ограниченный запрос.

function fromNetwork(request, timeout) {
    return new Promise((fulfill, reject) => {
        var timeoutId = setTimeout(reject, timeout);
        fetch(request).then((response) => {
            clearTimeout(timeoutId);
            fulfill(response);
        }, reject);
    });
}


function fromCache(request) {
// Открываем наше хранилище кэша (CacheStorage API), выполняем поиск запрошенного ресурса.
// Обратите внимание, что в случае отсутствия соответствия значения Promise выполнится успешно, но со значением `undefined`
    return caches.open(CACHE_NAME).then((cache) =>
        cache.match(request).then((matching) =>
            matching || Promise.reject('no-match')
    ));
}