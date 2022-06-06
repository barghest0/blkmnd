import { FC } from 'react';

import * as S from './HeaderNavLink.styles';

type Props = {
  path: string;
  children: React.ReactNode;
};

const HeaderNavLink: FC<Props> = ({ path, children }) => (
  <S.HeaderNavLink to={path}>{children}</S.HeaderNavLink>
);

export default HeaderNavLink;
