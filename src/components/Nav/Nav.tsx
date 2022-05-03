import { RouterPaths } from '../../shared/router/types';
import { StyledNavLink } from '../../shared/styles/links';
import * as S from './Nav.styles';

const Nav = () => {
  return (
    <S.Nav>
      <S.NavItem>
        <StyledNavLink to={RouterPaths.beats}>Beats</StyledNavLink>
      </S.NavItem>
      <S.NavItem>
        <StyledNavLink to={RouterPaths.soundKits}>Sound Kits</StyledNavLink>
      </S.NavItem>
      <S.NavItem>
        <StyledNavLink to={RouterPaths.collabs}>Collabs</StyledNavLink>
      </S.NavItem>
      <S.NavItem>
        <StyledNavLink to={RouterPaths.contact}>Contact</StyledNavLink>
      </S.NavItem>
    </S.Nav>
  );
};

export default Nav;
