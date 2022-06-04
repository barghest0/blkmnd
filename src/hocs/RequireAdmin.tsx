import { FC, useContext } from 'react';
import { Navigate } from 'react-router-dom';

import AuthContext from 'contexts/AuthContext';
import { RouterPaths } from 'shared/router/types';

type Props = {
  children: JSX.Element;
};

const RequireAdmin: FC<Props> = ({ children }) => {
  const { isAuth } = useContext(AuthContext);
  const isAdmin = true;

  if (!isAuth || !isAdmin) {
    return <Navigate to={RouterPaths.landing} />;
  }

  return children;
};

export default RequireAdmin;
