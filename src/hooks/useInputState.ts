import { useState } from 'react';

export const useInputState = (initialValue: string) => {
  const [inputValue, setInputValue] = useState(initialValue);

  return {
    inputValue,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
      const text = e.target?.value;
      setInputValue(text);
    },
    reset: () => setInputValue(''),
  };
};
