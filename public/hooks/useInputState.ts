import { useState } from 'preact/hooks';

export default (initialValue: string) => {
  const [value, setValue] = useState(initialValue);

  return {
    value,
    onChange: (e: Event) => {
      if (e.target instanceof HTMLInputElement) {
        const text = e.target?.value.trim();

        setValue(text);
      }
    },
    reset: () => setValue(''),
  };
};
