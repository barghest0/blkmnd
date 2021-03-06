import { createContext } from 'react';

import { User } from 'reduxStore/user/types';

type AuthContextState = {
  user: User | null;
  isAuth: boolean;
};

const auth: AuthContextState = {
  user: null,
  isAuth: false,
};

const AuthContext = createContext(auth);

export default AuthContext;
