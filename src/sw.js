workbox.precaching.precacheAndRoute(self.__precacheManifest);

workbox.routing.registerNavigationRoute('/index.html');

addEventListener('message', event => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    skipWaiting();
  }
});
