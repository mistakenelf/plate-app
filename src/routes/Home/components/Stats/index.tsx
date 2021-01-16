import React from 'react';
import classnames from 'classnames/bind';

import { useAuth } from '../../../../lib/hooks/useAuth';

import styles from './style.module.css';

const cx = classnames.bind(styles);

export const Stats: React.FC = () => {
  const { isLoggedIn } = useAuth();

  return (
    <>
      {isLoggedIn && (
        <>
          <div className={cx('row')}>
            <div className={cx('card')}>
              <div className={cx('content')}>
                <div className={cx('count')}>3</div>
                <div className={cx('title')}>Plates</div>
              </div>
            </div>
            <div className={cx('card')}>
              <div className={cx('content')}>
                <div className={cx('count')}>32</div>
                <div className={cx('title')}>Completed</div>
              </div>
            </div>
          </div>
          <div className={cx('row')}>
            <div className={cx('card')}>
              <div className={cx('content')}>
                <div className={cx('count')}>12</div>
                <div className={cx('title')}>Incomplete</div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};
