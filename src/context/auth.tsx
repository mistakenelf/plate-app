import React, { createContext, useEffect, useState } from 'react';
import { Session } from '@supabase/supabase-js';

import { supabase } from '../helpers/supabase';

interface AuthContextProps {
  userSession: Session | null;
}

export const AuthContext = createContext({} as AuthContextProps);

export const AuthProvider: React.FC = ({ children }) => {
  const [userSession, setUserSession] = useState<Session | null>(null);

  useEffect(() => {
    supabase.auth.onAuthStateChange((_event, session) => {
      setUserSession(session);
    });
  }, []);

  return (
    <AuthContext.Provider value={{ userSession }}>
      {children}
    </AuthContext.Provider>
  );
};
