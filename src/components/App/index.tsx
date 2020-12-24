import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { ThemeProvider } from '../../context/theme';
import { Routes } from '../../routes';

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <Routes />
      </ThemeProvider>
    </BrowserRouter>
  );
};
