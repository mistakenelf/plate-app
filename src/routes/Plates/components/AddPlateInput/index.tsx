import React from 'react';

import { Input } from '../../../../components/Input';
import { useI18n } from '../../../../lib/hooks/useI18n';

interface AddPlateInputProps {
  inputValue: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const AddPlateInput: React.FC<AddPlateInputProps> = ({
  inputValue,
  onChange,
}) => {
  const { i18n } = useI18n();

  return (
    <Input
      labelHidden
      id="plate"
      name="plate"
      inputLabel="Plate Name"
      type="text"
      value={inputValue}
      onChange={onChange}
      placeholder={i18n.t('home.todoInputPlaceholder')}
    />
  );
};
