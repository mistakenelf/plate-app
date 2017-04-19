import { compose } from 'redux'
import withAnalytics from './withAnalytics'
import withAuth from './withAuth'
import withData from './withData'
import withDefaultLayout from './withDefaultLayout'
import withNavlessLayout from './withNavlessLayout'

export const pageWithDefaultLayout = compose(
  withData,
  withAnalytics,
  withDefaultLayout
)

export const pageWithAuth = compose(
  withData,
  withAnalytics,
  withAuth,
  withDefaultLayout
)

export const pageWithNavlessLayout = compose(
  withData,
  withAnalytics,
  withNavlessLayout
)
