import React from 'react';
import classnames from 'classnames/bind';
import { Link } from 'react-router-dom';

import { useI18n } from '../../../../hooks/useI18n';

import styles from './style.module.css';

const cx = classnames.bind(styles);

export const Header: React.FC = () => {
  const { translate } = useI18n();

  return (
    <div className={cx('container')}>
      <div className={cx('action-row')}>
        <Link to="/settings" className={cx('settings-link')}>
          Settings
        </Link>
      </div>
      <h1 className={cx('header-text')}>
        {translate('home.whatsOnYourPlate')}
      </h1>
    </div>
  );
};
