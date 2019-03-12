
// Проверка того, что наш браузер поддерживает Service Worker API.

// variant 1

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
      navigator.serviceWorker.register('./sw888.js').then(function(registration) {
          // Регистрация успешна
          console.log('ServiceWorker registration successful with scope: ', registration.scope);
      }).catch(function(err) {
          // Регистрация не успешна
          console.log('ServiceWorker registration failed: ', err);
      });
  });
}




// variant 2

// if ('serviceWorker' in navigator) {

  // Весь код регистрации  асинхронный.
//   navigator.serviceWorker.register('./sw.js')

//       .then(() => navigator.serviceWorker.ready
//       .then((worker) => {
//         worker.sync.register('syncdata');
//       }))

//       .catch((err) => console.error(err));
// }
  
