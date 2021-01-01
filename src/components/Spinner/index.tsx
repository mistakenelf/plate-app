import React from 'react';
import classNames from 'classnames/bind';

import styles from './style.module.css';

const cx = classNames.bind(styles);

interface SpinnerProps {
  width?: number;
  height?: number;
  isOverlay?: boolean;
}

export const Spinner: React.FC<SpinnerProps> = ({
  width = 25,
  height = 25,
  isOverlay = false,
}) => {
  return (
    <>
      {isOverlay ? (
        <div className={cx('spinner-container')}>
          <div className={cx('overlay')} />
          <div className={cx('spinner')} style={{ width, height }}></div>
        </div>
      ) : (
        <div className={cx('spinner')} style={{ width, height }}></div>
      )}
    </>
  );
};
