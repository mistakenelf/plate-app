import { useContext } from 'react';

import { AuthContext } from '../context/auth';

export const useAuth = () => {
  const { isLoggedIn, login, logout } = useContext(AuthContext);

  return {
    isLoggedIn,
    login,
    logout,
  };
};
