import React, { createContext, useEffect, useState } from 'react';
import { Magic } from 'magic-sdk';

import { Spinner } from '../components/Spinner';

const magic = new Magic(import.meta.env.SNOWPACK_PUBLIC_MAGIC_KEY);

interface AuthContextProps {
  isLoggedIn: boolean;
  login: (email: string) => void;
  logout: () => void;
}

export const AuthContext = createContext({} as AuthContextProps);

export const AuthProvider: React.FC = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  const login = async (email: string) => {
    try {
      await magic.auth.loginWithMagicLink({ email });
      setIsLoggedIn(true);
    } catch (e) {
      console.error(e.message);
    }
  };

  const logout = async () => {
    try {
      await magic.user.logout();
      setIsLoggedIn(false);
    } catch (e) {
      setIsLoggedIn(isLoggedIn);
      console.error(e.message);
    }
  };

  useEffect(() => {
    const checkUser = async () => {
      try {
        setLoading(true);

        const loggedIn = await magic.user.isLoggedIn();

        if (loggedIn) {
          setIsLoggedIn(true);
        } else {
          setIsLoggedIn(false);
        }

        setLoading(false);
      } catch (e) {
        setLoading(false);
        console.error(e.message);
      }
    };

    checkUser();
  }, []);

  if (loading) {
    return <Spinner isOverlay />;
  }

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
