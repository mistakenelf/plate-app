import { compose } from 'redux';
import withAnalytics from './withAnalytics';
import withData from './withData';
import withDefaultLayout from './withDefaultLayout';
import withNavlessLayout from './withNavlessLayout';

export const pageWithDefaultLayout = compose(
  withData,
  withDefaultLayout,
  withAnalytics
);

export const pageWithNavlessLayout = compose(
  withData,
  withNavlessLayout,
  withAnalytics
);

export default compose(pageWithDefaultLayout);
