import MusicNoteIcon from '@mui/icons-material/MusicNote';
import GraphicEqIcon from '@mui/icons-material/GraphicEq';
import GroupsIcon from '@mui/icons-material/Groups';
import InfoIcon from '@mui/icons-material/Info';
import EmailIcon from '@mui/icons-material/Email';

import { RouterPaths } from '../../shared/router/types';
import { StyledNavLink } from '../../shared/styles/links';
import * as S from './DrawerNav.style';

const DrawerNav = () => {
  return (
    <S.DrawerNav>
      <S.NavItem>
        <MusicNoteIcon />
        <StyledNavLink to={RouterPaths.beats}>Beats</StyledNavLink>
      </S.NavItem>
      <S.NavItem>
        <GraphicEqIcon />
        <StyledNavLink to={RouterPaths.soundKits}>Sound Kits</StyledNavLink>
      </S.NavItem>
      <S.NavItem>
        <GroupsIcon />
        <StyledNavLink to={RouterPaths.collabs}>Collabs</StyledNavLink>
      </S.NavItem>
      <S.NavItem>
        <EmailIcon />
        <StyledNavLink to={RouterPaths.contact}>Contact</StyledNavLink>
      </S.NavItem>
      <S.NavItem>
        <InfoIcon />
        <StyledNavLink to={RouterPaths.about}>About</StyledNavLink>
      </S.NavItem>
    </S.DrawerNav>
  );
};

export default DrawerNav;
