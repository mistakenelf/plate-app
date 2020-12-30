import { useContext } from 'react';

import { AuthContext } from '../context/auth';

export const useAuth = () => {
  const { loggedIn } = useContext(AuthContext);

  return {
    loggedIn,
  };
};
