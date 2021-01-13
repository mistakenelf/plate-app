import React from 'react';
import classnames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';

import { RoutePaths } from '../../../../lib/constants';
import { useTheme } from '../../../../lib/hooks/useTheme';

import styles from './style.module.css';

const cx = classnames.bind(styles);

export const MainMenu: React.FC = () => {
  const { theme } = useTheme();

  return (
    <>
      <h2 className={cx('header-text')}>Main Menu</h2>
      <div className={cx('menu-container')}>
        <Link to={RoutePaths.HOME} className={cx('menu-item')}>
          About
          <FiArrowRight
            className={cx('menu-item-icon')}
            color={theme === 'dark' ? '#fff' : '#333'}
          />
        </Link>
        <Link to={RoutePaths.HOME} className={cx('menu-item')}>
          Terms and Conditions
          <FiArrowRight
            className={cx('menu-item-icon')}
            color={theme === 'dark' ? '#fff' : '#333'}
          />
        </Link>
      </div>
    </>
  );
};
