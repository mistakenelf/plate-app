import React from 'react';
import classnames from 'classnames/bind';
import { Link } from 'react-router-dom';

import styles from './style.module.css';

const cx = classnames.bind(styles);

export const Header: React.FC = () => {
  return (
    <div className={cx('container')}>
      <div className={cx('action-row')}>
        <Link to="/settings" className={cx('settings-link')}>
          Settings
        </Link>
      </div>
      <h1 className={cx('header-text')}>Whats on your Plate?</h1>
    </div>
  );
};
