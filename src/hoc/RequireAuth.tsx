import { FC, useContext } from 'react';
import { Navigate } from 'react-router-dom';
import AuthContext from '../context/AuthContext';
import { RouterPaths } from '../shared/router/types';

type Props = {
  children: JSX.Element;
};

const RequireAuth: FC<Props> = ({ children }) => {
  const { isAuth } = useContext(AuthContext);

  if (!isAuth) {
    return <Navigate to={RouterPaths.landing} />;
  }

  return children;
};

export default RequireAuth;
