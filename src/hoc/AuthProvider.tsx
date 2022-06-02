import { FC } from 'react';
import AuthContext from '../context/AuthContext';
import useTypedSelector from '../hooks/redux/useTypedDispatch';
import useActions from '../hooks/useActions';
import { useEffect } from 'react';
import { getToken } from '../shared/helpers/authHelper';
import * as authSelectors from '../redux/auth/selectors';

type Props = {
  children: React.ReactNode;
};

const AuthProvider: FC<Props> = ({ children }) => {
  const isAuth = useTypedSelector(authSelectors.isAuth);
  const user = useTypedSelector(authSelectors.user);
  const token = useTypedSelector(authSelectors.token);
  const { autoLogin } = useActions();

  const authValues = { user, isAuth };

  useEffect(() => {
    if (token) {
      autoLogin(getToken());
    }
  }, [isAuth]);

  return (
    <AuthContext.Provider value={authValues}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
