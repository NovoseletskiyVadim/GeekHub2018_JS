

// Проверка того, что наш браузер поддерживает Service Worker API.

if ('serviceWorker' in navigator) {

  // Весь код регистрации  асинхронный.
  navigator.serviceWorker.register('./service-worker.js')

      .then(() => navigator.serviceWorker.ready
      .then((worker) => {
        worker.sync.register('syncdata');
        console.log("sw зарешестрирован ");

      }))

      .catch((err) => console.error(err));
}
