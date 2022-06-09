import { FC, useEffect, useMemo } from 'react';

import AuthContext from 'contexts/AuthContext';
import useTypedSelector from 'hooks/redux/useTypedDispatch';
import useActions from 'hooks/useActions';
import { getToken } from 'shared/helpers/authHelper';
import * as authSelectors from 'reduxStore/auth/selectors';

type Props = {
  children: React.ReactNode;
};

const AuthProvider: FC<Props> = ({ children }) => {
  const isAuth = useTypedSelector(authSelectors.isAuth);
  const user = useTypedSelector(authSelectors.user);
  const token = useTypedSelector(authSelectors.token);
  const { autoLogin } = useActions();

  const getAuthContextValue = () => ({ user, isAuth });

  const authContextValue = useMemo(getAuthContextValue, [user]);

  useEffect(() => {
    if (token) {
      autoLogin(getToken());
    }
  }, [isAuth]);

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
