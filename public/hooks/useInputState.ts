import { useState } from 'preact/hooks';

export const useInputState = (initialValue: string) => {
  const [inputValue, setInputValue] = useState(initialValue);

  return {
    inputValue,
    onChange: (e: Event) => {
      if (e.target instanceof HTMLInputElement) {
        const text = e.target?.value.trim();

        setInputValue(text);
      }
    },
    reset: () => setInputValue(''),
  };
};
