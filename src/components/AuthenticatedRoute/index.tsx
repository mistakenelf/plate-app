import React from 'react';
import { RouteProps, Route, Redirect } from 'react-router-dom';

import { RoutePaths } from '../../lib/constants';
import { useAuth } from '../../lib/hooks/useAuth';

interface AuthenticatedRouteProps extends RouteProps {
  layoutComponent: React.ElementType;
}

export const AuthenticatedRoute: React.FC<AuthenticatedRouteProps> = ({
  layoutComponent,
  component,
  ...rest
}) => {
  const { isLoggedIn } = useAuth();

  if (component) {
    const Component = component;
    const Layout = layoutComponent;

    return (
      <Route
        {...rest}
        render={(props) =>
          isLoggedIn ? (
            <Layout>
              <Component {...props} />
            </Layout>
          ) : (
            <Redirect to={RoutePaths.LOGIN} />
          )
        }
      />
    );
  } else {
    return null;
  }
};
