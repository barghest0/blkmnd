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
  const isAuth = useTypedSelector(authSelectors.isUserAuth);
  const user = useTypedSelector(authSelectors.userInfo);
  const authAccessToken = useTypedSelector(authSelectors.authAccessToken);
  const { autoLogin } = useActions();

  const getAuthContextValue = () => ({ user, isAuth });

  const authContextValue = useMemo(getAuthContextValue, [user]);

  useEffect(() => {
    if (authAccessToken) {
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
