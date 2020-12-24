import React from 'react';
import classnames from 'classnames/bind';

import styles from './style.module.css';

const cx = classnames.bind(styles);

interface SwitchProps {
  id: string;
  isOn: boolean;
  handleToggle: () => void;
}

export const Switch: React.FC<SwitchProps> = ({ id, isOn, handleToggle }) => {
  return (
    <>
      <input
        className={cx('switch-checkbox')}
        id={id}
        type="checkbox"
        checked={isOn}
        onChange={handleToggle}
      />
      <label
        className={cx(['switch-label', { activated: isOn, inactive: !isOn }])}
        htmlFor={id}
      >
        <span className={cx('switch-button')} />
      </label>
    </>
  );
};
