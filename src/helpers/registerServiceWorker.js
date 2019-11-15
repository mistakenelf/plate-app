import { Workbox } from 'workbox-window';

export function registerServiceWorker() {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      const wb = new Workbox('/sw.js');

      const updateButton = document.querySelector('#app-update');

      wb.addEventListener('waiting', () => {
        updateButton.classList.add('show');
        updateButton.addEventListener('click', () => {
          wb.addEventListener('controlling', () => {
            window.location.reload();
          });
          wb.messageSW({ type: 'SKIP_WAITING' });
        });
      });

      wb.register();
    });
  }
}
