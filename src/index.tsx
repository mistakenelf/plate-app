import './assets/styles/_theme.css';
import './assets/styles/_global.css';
import './helpers/i18n';

import React, { Suspense } from 'react';
import { render } from 'react-dom';

import { App } from './components/App';

render(
  <React.StrictMode>
    <Suspense fallback={<div>Loading...</div>}>
      <App />
    </Suspense>
  </React.StrictMode>,
  document.getElementById('root'),
);

// Hot Module Replacement (HMR) - Remove this snippet to remove HMR.
// Learn more: https://snowpack.dev/concepts/hot-module-replacement
if (import.meta.hot) {
  import.meta.hot.accept();
}
