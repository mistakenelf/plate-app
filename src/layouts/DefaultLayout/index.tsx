import React from 'react';
import classnames from 'classnames/bind';

import styles from './style.module.css';
import { BottomNav } from './components/BottomNav';

const cx = classnames.bind(styles);

export const DefaultLayout: React.FC = ({ children }) => {
  return (
    <div className={cx('container')}>
      {children}
      <BottomNav />
    </div>
  );
};
