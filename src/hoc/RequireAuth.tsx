import { FC } from 'react';
import { Navigate } from 'react-router-dom';
import { RouterPaths } from '../shared/router/types';

type Props = {
  children: JSX.Element;
};

const RequireAuth: FC<Props> = ({ children }) => {
  const isAuth = true;

  if (!isAuth) {
    return <Navigate to={RouterPaths.landing} />;
  }

  return children;
};

export default RequireAuth;
