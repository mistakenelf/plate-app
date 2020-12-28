import React from 'react';
import classnames from 'classnames/bind';
import { useTranslation } from 'react-i18next';

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
  const { t } = useTranslation();

  return (
    <input
      className={cx('input')}
      type="text"
      value={inputValue}
      onChange={onChange}
      placeholder={t('home.todoInputPlaceholder')}
    />
  );
};
