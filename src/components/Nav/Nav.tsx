import { FC } from 'react';
import { RouterPaths } from '../../shared/router/types';
import { StyledNavLink } from '../../shared/styles/links';
import * as S from './Nav.styles';

type Props = {
  isSearchOpen: boolean;
};

const Nav: FC<Props> = ({ isSearchOpen }) => {
  return (
    <S.Nav isSearchOpen={isSearchOpen}>
      <StyledNavLink to={RouterPaths.beats}>Beats</StyledNavLink>
      <StyledNavLink to={RouterPaths.soundKits}>Sound Kits</StyledNavLink>
      <StyledNavLink to={RouterPaths.collabs}>Collabs</StyledNavLink>
      <StyledNavLink to={RouterPaths.contact}>Contact</StyledNavLink>
      <StyledNavLink to={RouterPaths.about}>About</StyledNavLink>
    </S.Nav>
  );
};
export { Props };
export default Nav;
