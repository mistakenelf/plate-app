import React, { createContext, useEffect, useState } from 'react';

interface ThemeContextProps {
  theme: string;
  setCurrentTheme: (theme: string) => void;
}

export const ThemeContext = createContext({} as ThemeContextProps);

export const ThemeProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = useState<string>(
    localStorage.getItem('theme') ?? 'light',
  );

  const setCurrentTheme = (theme: string) => {
    setTheme(theme);
    localStorage.setItem('theme', theme);
  };

  useEffect(() => {
    const currentTheme = localStorage.getItem('theme');

    if (currentTheme) {
      setTheme(currentTheme);
      document.body.dataset.theme = currentTheme;
      document.body.style.backgroundColor =
        currentTheme === 'dark' ? '#333' : '#eee';
    } else {
      document.body.dataset.theme = theme;
      document.body.style.backgroundColor = theme === 'dark' ? '#333' : '#eee';
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setCurrentTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
