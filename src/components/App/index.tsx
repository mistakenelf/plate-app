import React, { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';

import { ThemeProvider } from '../../context/theme';
import { Routes } from '../../routes';

export const App: React.FC = () => {
  useEffect(() => {
    if (import.meta.env.MODE === 'production') {
      if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
          navigator.serviceWorker.register('/sw.js').then().catch();
        });
      }
    }
  }, []);

  return (
    <BrowserRouter>
      <ThemeProvider>
        <Routes />
      </ThemeProvider>
    </BrowserRouter>
  );
};
