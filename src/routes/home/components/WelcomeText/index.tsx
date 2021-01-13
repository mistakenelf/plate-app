import React from 'react';
import classnames from 'classnames/bind';
import { Link } from 'react-router-dom';

import { RoutePaths } from '../../../../lib/constants';
import { useAuth } from '../../../../lib/hooks/useAuth';

import styles from './style.module.css';

const cx = classnames.bind(styles);

export const WelcomeText: React.FC = () => {
  const { isLoggedIn } = useAuth();

  return (
    <>
      {!isLoggedIn && (
        <p className={cx('welcome-text')}>
          Welcome, it seems you have not yet logged in. In order to get started
          please{' '}
          <Link className={cx('login-link')} to={RoutePaths.LOGIN}>
            login
          </Link>
          . If you dont have an account yet, dont worry, logging in will create
          an account for you if you dont have one.
        </p>
      )}
    </>
  );
};
