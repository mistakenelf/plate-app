import React from 'react';
import classnames from 'classnames/bind';

import styles from './style.module.css';

const cx = classnames.bind(styles);

interface AddTodoInputProps {
  inputValue: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const AddTodoInput: React.FC<AddTodoInputProps> = ({
  inputValue,
  onChange,
}) => {
  return (
    <input
      className={cx('input')}
      type="text"
      value={inputValue}
      onChange={onChange}
      placeholder="Enter an item to add"
    />
  );
};
