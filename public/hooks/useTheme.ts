import { useContext } from 'preact/hooks';

import { ThemeContext } from '../context/theme';

export const useTheme = () => {
  const { theme, setCurrentTheme } = useContext(ThemeContext);

  return {
    theme,
    setCurrentTheme,
  };
};
