import React, { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';

import { Spinner } from '../components/Spinner';
import { RoutePaths } from '../lib/constants';
import { DefaultLayout } from '../layouts/DefaultLayout';

import { Home } from './home';

const Settings = lazy(() => import('./settings'));
const Login = lazy(() => import('./login'));
const Plates = lazy(() => import('./plates'));
const Profile = lazy(() => import('./profile'));

export const prefetchMap = [
  {
    path: RoutePaths.SETTINGS,
    prefetchComponents: [Settings],
  },
  {
    path: RoutePaths.LOGIN,
    prefetchComponents: [Login],
  },
  {
    path: RoutePaths.PLATES,
    prefetchComponents: [Plates],
  },
  {
    path: RoutePaths.PROFILE,
    prefetchComponents: [Profile],
  },
];

export const Routes: React.FC = () => {
  return (
    <Suspense fallback={<Spinner isOverlay />}>
      <Switch>
        <Route
          exact
          path={RoutePaths.HOME}
          render={() => (
            <DefaultLayout>
              <Home />
            </DefaultLayout>
          )}
        />
        <Route
          exact
          path={RoutePaths.SETTINGS}
          render={() => (
            <DefaultLayout>
              <Settings />
            </DefaultLayout>
          )}
        />
        <Route
          exact
          path={RoutePaths.PLATES}
          render={() => (
            <DefaultLayout>
              <Plates />
            </DefaultLayout>
          )}
        />
        <Route
          exact
          path={RoutePaths.PROFILE}
          render={() => (
            <DefaultLayout>
              <Profile />
            </DefaultLayout>
          )}
        />
        <Route exact path={RoutePaths.LOGIN} component={Login} />
      </Switch>
    </Suspense>
  );
};
