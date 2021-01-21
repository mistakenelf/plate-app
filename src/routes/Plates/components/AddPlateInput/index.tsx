import React from 'react';

import { Input } from '../../../../components/Input';
import { useTranslation } from '../../../../lib/hooks/useTranslation';

interface AddPlateInputProps {
  inputValue: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const AddPlateInput: React.FC<AddPlateInputProps> = ({
  inputValue,
  onChange,
}) => {
  const { t } = useTranslation();

  return (
    <Input
      labelHidden
      id="plate"
      name="plate"
      inputLabel={t('plates.plateInputLabel')}
      type="text"
      value={inputValue}
      onChange={onChange}
      placeholder={t('plates.plateInputPlaceholder')}
    />
  );
};
