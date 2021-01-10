import React from 'react';
import classnames from 'classnames/bind';
import { FiHome } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { IoFastFood, IoPersonCircle } from 'react-icons/io5';

import { useTheme } from '../../../../lib/hooks/useTheme';

import styles from './style.module.css';

const cx = classnames.bind(styles);

export const BottomNav: React.FC = () => {
  const { theme } = useTheme();

  return (
    <div className={cx('container')}>
      <Link to="/" className={cx('nav-item')}>
        <FiHome
          className={cx('nav-icon')}
          color={theme === 'dark' ? '#fff' : '#333'}
        />
        <div className={cx('nav-text')}>Home</div>
      </Link>
      <Link to="/plates" className={cx('nav-item')}>
        <IoFastFood
          className={cx('nav-icon')}
          color={theme === 'dark' ? '#fff' : '#333'}
        />
        <div className={cx('nav-text')}>Plates</div>
      </Link>
      <Link to="/profile" className={cx('nav-item')}>
        <IoPersonCircle
          className={cx('nav-icon')}
          color={theme === 'dark' ? '#fff' : '#333'}
        />
        <div className={cx('nav-text')}>Profile</div>
      </Link>
    </div>
  );
};
