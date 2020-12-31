import React from 'react';
import classnames from 'classnames/bind';
import { Link } from 'react-router-dom';

import { useI18n } from '../../../../hooks/useI18n';

import styles from './style.module.css';

const cx = classnames.bind(styles);

export const Header: React.FC = () => {
  const { i18n } = useI18n();

  return (
    <div className={cx('container')}>
      <div className={cx('action-row')}>
        <Link to="/settings" className={cx('settings-link')}>
          {i18n.t('home.settingsLink')}
        </Link>
        <Link to="/login" className={cx('settings-link')}>
          {i18n.t('home.loginLink')}
        </Link>
      </div>
      <h1 className={cx('header-text')}>{i18n.t('home.whatsOnYourPlate')}</h1>
    </div>
  );
};
