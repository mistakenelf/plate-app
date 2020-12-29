import React from 'react';
import classnames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import styles from './style.module.css';

const cx = classnames.bind(styles);

export const Header: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className={cx('container')}>
      <div className={cx('action-row')}>
        <Link to="/settings" className={cx('settings-link')}>
          {t('home.settingsLink')}
        </Link>
        <Link to="/login" className={cx('settings-link')}>
          {t('home.loginLink')}
        </Link>
      </div>
      <h1 className={cx('header-text')}>{t('home.whatsOnYourPlate')}</h1>
    </div>
  );
};
