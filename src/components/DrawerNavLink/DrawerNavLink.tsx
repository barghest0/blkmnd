import { ReactNode, FC } from 'react';

import * as S from './DrawerNavLink.style';

type Props = {
  children: ReactNode;
  path: string;
};

const DrawerNavLink: FC<Props> = ({ children, path }) => {
  return <S.DrawerNavLink to={path}>{children}</S.DrawerNavLink>;
};

export default DrawerNavLink;
