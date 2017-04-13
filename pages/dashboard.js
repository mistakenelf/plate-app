import DashboardContainer from '../containers/DashboardContainer';
import Header from '../components/Header/Header';
import React from 'react';
import page from '../hocs/page';

export default page(() => (
  <div>
    <Header title="Dashboard" />
    <DashboardContainer />
  </div>
));
