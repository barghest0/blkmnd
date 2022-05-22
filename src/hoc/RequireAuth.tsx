import { FC } from 'react';
import { Navigate } from 'react-router-dom';
import useTypedSelector from '../hooks/redux/useTypedDispatch';
import { RouterPaths } from '../shared/router/types';

type Props = {
  children: JSX.Element;
};

const RequireAuth: FC<Props> = ({ children }) => {
  const { isAuth } = useTypedSelector(state => state.auth);

  if (!isAuth) {
    return <Navigate to={RouterPaths.landing} />;
  }

  return children;
};

export default RequireAuth;
