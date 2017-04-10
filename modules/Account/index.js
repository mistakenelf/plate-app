// @flow

import BackButton from '../../components/BackButton';
import ProfilePage from './components/ProfilePage';
import React from 'react';

const Account = () => {
  return (
    <div>
      <BackButton buttonColor="black" />
      <ProfilePage />
    </div>
  );
};

export default Account;
