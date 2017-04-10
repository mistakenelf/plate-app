// @flow

import Contact from '../modules/Contact';
import Header from '../modules/Header';
import React from 'react';
import page from '../hocs/page';

export default page(() => (
  <div>
    <Header title="Contact" />
    <Contact />
  </div>
));
