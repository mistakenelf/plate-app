import React, { createContext, useEffect, useState } from 'react';

interface AuthContextProps {
  loggedIn: boolean;
}

export const AuthContext = createContext({} as AuthContextProps);

export const AuthProvider: React.FC = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false);

  const hashParams = window.location.hash.substring(1);
  const params: any = {};
  hashParams.split('&').map((hk) => {
    const temp = hk.split('=');
    params[temp[0]] = temp[1];
  });

  useEffect(() => {
    if (params.access_token) {
      setLoggedIn(true);
      localStorage.setItem('token', params.access_token);
    }
  }, [params.access_token]);

  return (
    <AuthContext.Provider value={{ loggedIn }}>{children}</AuthContext.Provider>
  );
};
