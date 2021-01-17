import React from 'react';
import classnames from 'classnames/bind';

import styles from './style.module.css';

const cx = classnames.bind(styles);

export const Header: React.FC = () => {
  return <h1 className={cx('header-text')}>My Plates</h1>;
};
