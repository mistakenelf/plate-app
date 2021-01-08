import React from 'react';
import classnames from 'classnames/bind';
import { Link } from 'react-router-dom';

import { useI18n } from '../../../../hooks/useI18n';
import { useAuth } from '../../../../hooks/useAuth';

import styles from './style.module.css';

const cx = classnames.bind(styles);

export const Header: React.FC = () => {
  const { i18n } = useI18n();
  const { isLoggedIn, logout } = useAuth();

  return (
    <div className={cx('container')}>
      <div className={cx('action-row')}>
        <Link to="/settings" className={cx('settings-link')}>
          {i18n.t('home.settingsLink')}
        </Link>
        {!isLoggedIn ? (
          <Link to="/login" className={cx('settings-link')}>
            {i18n.t('home.loginLink')}
          </Link>
        ) : (
          <button onClick={logout} className={cx('settings-link')}>
            {i18n.t('home.logoutButton')}
          </button>
        )}
      </div>
      <h1 className={cx('header-text')}>{i18n.t('home.whatsOnYourPlate')}</h1>
    </div>
  );
};
