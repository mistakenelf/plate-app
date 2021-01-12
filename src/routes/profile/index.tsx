import React from 'react';
import classnames from 'classnames/bind';

import styles from './style.module.css';

const cx = classnames.bind(styles);

const Profile: React.FC = () => {
  return (
    <div className={cx('container')}>
      <div>Profile</div>
    </div>
  );
};

export default Profile;
