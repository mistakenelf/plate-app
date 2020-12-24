import React from 'react';
import feather from 'feather-icons';
import classnames from 'classnames/bind';

import { useTheme } from '../../../../hooks/useTheme';

import styles from './style.module.css';

const cx = classnames.bind(styles);

export const EmptyPlate: React.FC = () => {
  const { theme } = useTheme();

  return (
    <div className={cx('empty-container')}>
      <div
        dangerouslySetInnerHTML={{
          __html: feather.icons['alert-triangle'].toSvg({
            'stroke-width': 1,
            color: theme === 'light' ? '#333' : '#fff',
            height: 100,
            width: 100,
          }),
        }}
      />
      <p className={cx('empty-text')}>Your plate is empty, lets fill it up!</p>
    </div>
  );
};
