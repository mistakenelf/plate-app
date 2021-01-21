import React from 'react';
import classnames from 'classnames/bind';
import { Link } from 'react-router-dom';

import { useTranslation } from '../../../../lib/hooks/useTranslation';
import { useAuth } from '../../../../lib/hooks/useAuth';
import { RoutePaths } from '../../../../lib/constants';

import styles from './style.module.css';

const cx = classnames.bind(styles);

export const Header: React.FC = () => {
  const { t } = useTranslation();
  const { isLoggedIn, userMetadata, logout } = useAuth();

  return (
    <>
      <div className={cx('container')}>
        {isLoggedIn && userMetadata.email && (
          <div className={cx('user-email')}>{userMetadata.email}</div>
        )}
        <div className={cx('action-row')}>
          <Link to={RoutePaths.SETTINGS} className={cx('settings-link')}>
            {t('home.settingsLink')}
          </Link>
          {!isLoggedIn ? (
            <Link to={RoutePaths.LOGIN} className={cx('settings-link')}>
              {t('home.loginLink')}
            </Link>
          ) : (
            <button onClick={logout} className={cx('settings-link')}>
              {t('home.logoutButton')}
            </button>
          )}
        </div>
      </div>
      <h1 className={cx('welcome-text')}>{t('home.header')}</h1>
    </>
  );
};
