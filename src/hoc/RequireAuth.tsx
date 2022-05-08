import { FC } from 'react';
import { Navigate } from 'react-router-dom';

type Props = {
  children: JSX.Element;
};

const RequireAuth: FC<Props> = ({ children }) => {
  const isAuth = true;

  if (!isAuth) {
    return <Navigate to={'/'} />;
  }

  return children;
};

export default RequireAuth;
