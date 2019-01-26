import { Route, RouteProps } from 'react-router-dom'
import React from 'react'

import { DefaultLayout } from '../../components/DefaultLayout/DefaultLayout'

export function DefaultLayoutRoute({ component, render, ...rest }: RouteProps) {
  if (component !== undefined) {
    const Component = component
    return (
      <Route
        {...rest}
        render={props => (
          <DefaultLayout {...props}>
            <Component {...props} />
          </DefaultLayout>
        )}
      />
    )
  } else if (render !== undefined) {
    return (
      <Route
        {...rest}
        render={props => (
          <DefaultLayout {...props}>{render({ ...props })}</DefaultLayout>
        )}
      />
    )
  }
  return null
}
