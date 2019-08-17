import React from 'react';
import { Route } from 'react-router-dom';

export const RouteWithSubRoutes = route => {
  return (
    <Route
      push
      path={route.path}
      key={route.key}
      exact={route.exact}
      render={props => <route.component {...props} routes={route.routes} />}
    />
  );
};
