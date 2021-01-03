import { useContext } from 'react';

import { AuthContext } from '../context/auth';

export const useAuth = () => {
  const { userSession } = useContext(AuthContext);

  return {
    userSession,
  };
};
