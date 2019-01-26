import { Route, RouteProps } from 'react-router-dom'
import React from 'react'

import SimpleLayout from '../../components/SimpleLayout/SimpleLayout'

function SimpleLayoutRoute({ component, render, ...rest }: RouteProps) {
  if (component !== undefined) {
    const Component = component
    return (
      <Route
        {...rest}
        render={props => (
          <SimpleLayout {...props}>
            <Component {...props} />
          </SimpleLayout>
        )}
      />
    )
  } else if (render !== undefined) {
    return (
      <Route
        {...rest}
        render={props => (
          <SimpleLayout {...props}>{render({ ...props })}</SimpleLayout>
        )}
      />
    )
  }
  return null
}

export default SimpleLayoutRoute
