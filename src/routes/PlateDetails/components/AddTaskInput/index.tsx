import React from 'react';

import { Input } from '../../../../components/Input';
import { useTranslation } from '../../../../lib/hooks/useTranslation';

interface AddTaskInputProps {
  inputValue: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const AddTaskInput: React.FC<AddTaskInputProps> = ({
  inputValue,
  onChange,
}) => {
  const { t } = useTranslation();

  return (
    <Input
      labelHidden
      id="task"
      name="task"
      inputLabel={t('plateDetails.taskInputLabel')}
      type="text"
      value={inputValue}
      onChange={onChange}
      placeholder={t('plateDetails.taskInputPlaceholder')}
    />
  );
};
