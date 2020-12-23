import { FunctionComponent, render } from 'preact';
import hydrate from 'preact-iso/hydrate';
import { LocationProvider, Router } from 'preact-iso/router';
import lazy, { ErrorBoundary } from 'preact-iso/lazy';

import Home from './pages/home';
import { NotFound } from './pages/_404';
import { ThemeProvider } from './context/theme';

const Settings = lazy(() => import('./pages/settings'));

export const App: FunctionComponent = () => {
  return (
    <ThemeProvider>
      <LocationProvider>
        <ErrorBoundary>
          <Router>
            <Home path="/" />
            <Settings path="/settings" />
            <NotFound default />
          </Router>
        </ErrorBoundary>
      </LocationProvider>
    </ThemeProvider>
  );
};

render(<App />, document.body);

export async function prerender(data: any) {
  const { default: prerender } = await import('preact-iso/prerender');

  return await prerender(<App {...data} />);
}
