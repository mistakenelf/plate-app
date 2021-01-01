import React from 'react';
import classnames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import { useTheme } from '../../hooks/useTheme';

import styles from './style.module.css';

const cx = classnames.bind(styles);

interface BackArrowProps {
  path?: string;
}

export const BackArrow: React.FC<BackArrowProps> = ({ path = '/' }) => {
  const { theme } = useTheme();

  return (
    <Link to={path}>
      <FiArrowLeft
        className={cx('back-arrow')}
        color={theme === 'dark' ? '#fff' : '#333'}
      />
    </Link>
  );
};
