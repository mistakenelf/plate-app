import Dashboard from '../modules/Dashboard';
import Header from '../modules/Header';
import React from 'react';
import page from '../hocs/page';

export default page(() => (
  <div>
    <Header title="Dashboard" />
    <Dashboard />
  </div>
));
