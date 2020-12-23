import { FunctionComponent } from 'preact';
import hydrate from 'preact-iso/hydrate';
import { LocationProvider, Router } from 'preact-iso/router';
import { ErrorBoundary } from 'preact-iso/lazy';

import Home from './pages/home/index';
import { NotFound } from './pages/_404';
import { ThemeProvider } from './context/theme';

export const App: FunctionComponent = () => {
  return (
    <ThemeProvider>
      <LocationProvider>
        <ErrorBoundary>
          <Router>
            <Home path="/" />
            <NotFound default />
          </Router>
        </ErrorBoundary>
      </LocationProvider>
    </ThemeProvider>
  );
};

hydrate(<App />);

export async function prerender(data: any) {
  const { default: prerender } = await import('preact-iso/prerender');

  return await prerender(<App {...data} />);
}
