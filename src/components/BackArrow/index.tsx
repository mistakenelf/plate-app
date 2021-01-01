import React from 'react';
import classnames from 'classnames/bind';
import { Link } from 'react-router-dom';
import feather from 'feather-icons';

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
      <div
        className={cx('back-arrow')}
        dangerouslySetInnerHTML={{
          __html: feather.icons['arrow-left'].toSvg({
            'stroke-width': 2,
            color: theme === 'dark' ? '#fff' : '#333',
            height: 30,
            width: 30,
          }),
        }}
      />
    </Link>
  );
};
