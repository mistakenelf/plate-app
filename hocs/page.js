import { compose } from 'redux';
import withAnalytics from './withAnalytics';
import withData from './withData';
import withDefaultLayout from './withDefaultLayout';
import withNavlessLayout from './withNavlessLayout';

export const pageWithDefaultLayout = compose(
  withData,
  withAnalytics,
  withDefaultLayout
);

export const pageWithNavlessLayout = compose(
  withData,
  withAnalytics,
  withNavlessLayout
);

export default compose(pageWithDefaultLayout);
