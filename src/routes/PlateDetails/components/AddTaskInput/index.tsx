import React from 'react';

import { Input } from '../../../../components/Input';
import { useI18n } from '../../../../lib/hooks/useI18n';

interface AddTaskInputProps {
  inputValue: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const AddTaskInput: React.FC<AddTaskInputProps> = ({
  inputValue,
  onChange,
}) => {
  const { i18n } = useI18n();

  return (
    <Input
      labelHidden
      id="task"
      name="task"
      inputLabel="Task"
      type="text"
      value={inputValue}
      onChange={onChange}
      placeholder={i18n.t('home.todoInputPlaceholder')}
    />
  );
};
