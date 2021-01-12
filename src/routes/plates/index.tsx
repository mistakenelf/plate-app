import React from 'react';
import classnames from 'classnames/bind';

import styles from './style.module.css';

const cx = classnames.bind(styles);

const Plates: React.FC = () => {
  return (
    <div className={cx('container')}>
      <div>Plates</div>
    </div>
  );
};

export default Plates;
