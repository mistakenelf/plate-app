import React, { createContext, useState } from 'react';

interface AuthContextProps {
  loggedIn: boolean;
}

export const AuthContext = createContext({} as AuthContextProps);

export const AuthProvider: React.FC = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <AuthContext.Provider value={{ loggedIn }}>{children}</AuthContext.Provider>
  );
};
