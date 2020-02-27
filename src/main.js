import App from './components/App';

if (process.env.NODE_ENV === 'production') {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker
        .register('/service-worker.js')
        .then()
        .catch();
    });
  }
}

const app = new App({
  target: document.body,
});

export default app;
