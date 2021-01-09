import { useContext } from 'react';

import { AuthContext } from '../context/auth';

export const useAuth = () => {
  const { isLoggedIn, userMetadata, login, logout } = useContext(AuthContext);

  return {
    isLoggedIn,
    userMetadata,
    login,
    logout,
  };
};
