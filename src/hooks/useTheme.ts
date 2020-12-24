import { useContext } from 'react';

import { ThemeContext } from '../context/theme';

export const useTheme = () => {
  const { theme, setCurrentTheme } = useContext(ThemeContext);

  return {
    theme,
    setCurrentTheme,
  };
};
