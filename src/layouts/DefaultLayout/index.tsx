import React from 'react';
import classnames from 'classnames/bind';

import { useAuth } from '../../lib/hooks/useAuth';

import styles from './style.module.css';
import { BottomNav } from './components/BottomNav';

const cx = classnames.bind(styles);

export const DefaultLayout: React.FC = ({ children }) => {
  const { isLoggedIn } = useAuth();

  return (
    <div className={cx('container')}>
      {children}
      {isLoggedIn && <BottomNav />}
    </div>
  );
};
