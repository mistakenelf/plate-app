import { createContext, FunctionComponent } from 'preact';
import { useEffect, useState } from 'preact/hooks';

interface ThemeContextProps {
  theme: string;
  setCurrentTheme: (theme: string) => void;
}

export const ThemeContext = createContext({} as ThemeContextProps);

export const ThemeProvider: FunctionComponent = ({ children }) => {
  const [theme, setTheme] = useState<string>('light');

  const setCurrentTheme = (theme: string) => {
    setTheme(theme);
  };

  useEffect(() => {
    document.body.dataset.theme = theme;
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setCurrentTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
