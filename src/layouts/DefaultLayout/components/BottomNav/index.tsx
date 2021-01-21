import React from 'react';
import classnames from 'classnames/bind';
import { FiHome } from 'react-icons/fi';
import { NavLink } from 'react-router-dom';
import { IoFastFood, IoPersonCircle } from 'react-icons/io5';

import { useTranslation } from '../../../../lib/hooks/useTranslation';

import styles from './style.module.css';

const cx = classnames.bind(styles);

export const BottomNav: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className={cx('container')}>
      <NavLink
        to="/"
        className={cx('nav-item')}
        activeClassName={cx('nav-active')}
        isActive={(_match, location) => location.pathname === '/'}
      >
        <FiHome className={cx('nav-icon')} />
        <div className={cx('nav-text')}>
          {t('layouts.defaultLayout.bottomNav.homeLink')}
        </div>
      </NavLink>
      <NavLink
        to="/plates"
        className={cx('nav-item')}
        activeClassName={cx('nav-active')}
      >
        <IoFastFood className={cx('nav-icon')} />
        <div className={cx('nav-text')}>
          {t('layouts.defaultLayout.bottomNav.platesLink')}
        </div>
      </NavLink>
      <NavLink
        to="/profile"
        className={cx('nav-item')}
        activeClassName={cx('nav-active')}
      >
        <IoPersonCircle className={cx('nav-icon')} />
        <div className={cx('nav-text')}>
          {t('layouts.defaultLayout.bottomNav.profileLink')}
        </div>
      </NavLink>
    </div>
  );
};
