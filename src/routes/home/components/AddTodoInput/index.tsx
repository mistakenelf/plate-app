import React from 'react';

import { Input } from '../../../../components/Input';
import { useI18n } from '../../../../lib/hooks/useI18n';

interface AddTodoInputProps {
  inputValue: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const AddTodoInput: React.FC<AddTodoInputProps> = ({
  inputValue,
  onChange,
}) => {
  const { i18n } = useI18n();

  return (
    <Input
      id="todoItem"
      name="todoItem"
      type="text"
      value={inputValue}
      onChange={onChange}
      placeholder={i18n.t('home.todoInputPlaceholder')}
    />
  );
};
