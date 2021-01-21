import React from 'react';
import classnames from 'classnames/bind';
import { Link } from 'react-router-dom';

import { RoutePaths } from '../../../../lib/constants';
import { useAuth } from '../../../../lib/hooks/useAuth';
import { useTranslation } from '../../../../lib/hooks/useTranslation';

import styles from './style.module.css';

const cx = classnames.bind(styles);

export const WelcomeText: React.FC = () => {
  const { isLoggedIn } = useAuth();
  const { t } = useTranslation();

  return (
    <>
      {!isLoggedIn && (
        <p className={cx('welcome-text')}>
          {t('home.welcomePartOne')}{' '}
          <Link className={cx('login-link')} to={RoutePaths.LOGIN}>
            {t('home.welcomeLoginLink')}
          </Link>
          {t('home.welcomePartTwo')}
        </p>
      )}
    </>
  );
};
