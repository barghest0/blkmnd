import { FC } from 'react';
import AuthContext from '../context/AuthContext';
import useTypedSelector from '../hooks/redux/useTypedDispatch';
import useActions from '../hooks/useActions';
import { useEffect } from 'react';
import { getToken } from '../shared/helpers/authHelper';

type Props = {
  children: React.ReactNode;
};

const AuthProvider: FC<Props> = ({ children }) => {
  const { user, isAuth } = useTypedSelector(state => state.auth);
  const authValues = { user, isAuth };
  const { autoLogin } = useActions();
  const { token } = useTypedSelector(state => state.auth);

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
