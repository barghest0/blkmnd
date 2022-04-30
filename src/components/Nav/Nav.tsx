import { RouterPaths } from '../../shared/router/types';
import { StyledNavLink } from '../../shared/styles/links';
import * as S from './Nav.styles';

const Nav = () => {
  return (
    <S.Nav>
      <StyledNavLink to={RouterPaths.beats}>Beats</StyledNavLink>
      <StyledNavLink to={RouterPaths.soundKits}>Sound Kits</StyledNavLink>
      <StyledNavLink to={RouterPaths.collabs}>Collabs</StyledNavLink>
      <StyledNavLink to={RouterPaths.contact}>Contact</StyledNavLink>
    </S.Nav>
  );
};

export default Nav;
