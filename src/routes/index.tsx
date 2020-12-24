import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Home } from './home';
import Settings from './settings';

export const Routes: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/settings" component={Settings} />
    </Switch>
  );
};
