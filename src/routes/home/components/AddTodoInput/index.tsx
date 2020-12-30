import React from 'react';
import { useTranslation } from 'react-i18next';

import { Input } from '../../../../components/Input';

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
    <Input
      type="text"
      value={inputValue}
      onChange={onChange}
      placeholder={t('home.todoInputPlaceholder')}
    />
  );
};
