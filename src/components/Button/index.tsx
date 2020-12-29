import React from 'react';
import classnames from 'classnames/bind';

import styles from './style.module.css';

const cx = classnames.bind(styles);

interface ButtonProps {
  className?: string;
  isDisabled?: boolean;
  isLoading?: boolean;
  block?: boolean;
  size?: 'small' | 'normal';
  type?: 'button' | 'submit';
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  className,
  isDisabled,
  isLoading,
  block = false,
  size = 'normal',
  type = 'submit',
  onClick,
}) => (
  <button
    className={cx([
      className,
      'button',
      {
        small: size === 'small',
        normal: size === 'normal',
        block,
      },
    ])}
    onClick={onClick}
    disabled={isDisabled}
    type={type}
  >
    {isLoading ? <span>Loading...</span> : children}
  </button>
);
