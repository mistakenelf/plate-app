import React from 'react';
import classnames from 'classnames/bind';
import { FiHome } from 'react-icons/fi';
import { NavLink } from 'react-router-dom';
import { IoFastFood, IoPersonCircle } from 'react-icons/io5';

import styles from './style.module.css';

const cx = classnames.bind(styles);

export const BottomNav: React.FC = () => {
  return (
    <div className={cx('container')}>
      <NavLink
        to="/"
        className={cx('nav-item')}
        activeClassName={cx('nav-active')}
        isActive={(_match, location) => location.pathname === '/'}
      >
        <FiHome className={cx('nav-icon')} />
        <div className={cx('nav-text')}>Home</div>
      </NavLink>
      <NavLink
        to="/plates"
        className={cx('nav-item')}
        activeClassName={cx('nav-active')}
      >
        <IoFastFood className={cx('nav-icon')} />
        <div className={cx('nav-text')}>Plates</div>
      </NavLink>
      <NavLink
        to="/profile"
        className={cx('nav-item')}
        activeClassName={cx('nav-active')}
      >
        <IoPersonCircle className={cx('nav-icon')} />
        <div className={cx('nav-text')}>Profile</div>
      </NavLink>
    </div>
  );
};
