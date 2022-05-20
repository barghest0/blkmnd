import PersonIcon from '@mui/icons-material/Person';
import AddModeratorIcon from '@mui/icons-material/AddModerator';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import GetAppIcon from '@mui/icons-material/GetApp';
import LogoutIcon from '@mui/icons-material/Logout';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import GraphicEqIcon from '@mui/icons-material/GraphicEq';
import GroupsIcon from '@mui/icons-material/Groups';
import InfoIcon from '@mui/icons-material/Info';
import EmailIcon from '@mui/icons-material/Email';

import { useEffect, useState } from 'react';

import { RouterPaths } from '../../shared/router/types';
import HeaderSearch from '../HeaderSearch/HeaderSearch';
import Logo from '../Logo/Logo';
import * as S from './Header.styles';
import { useNavigate } from 'react-router-dom';
import navigation from '../../shared/router/navigation';
import HeaderNavLink from '../HeaderNavLink/HeaderNavLink';
import DrawerNavLink from '../DrawerNavLink/DrawerNavLink';
import { Button } from '@mui/material';
import { StyledLink } from '../../shared/styles/links';
import useTypedSelector from '../../hooks/redux/useTypedDispatch';

type ProfileDropdownProps = {
  isOpen: boolean;
};

type DrawerProps = {
  isOpen: boolean;
};

type NavProps = {
  isSearchOpen: boolean;
};

const Header = () => {
  const cost = 0;
  const navigate = useNavigate();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const { quantity } = useTypedSelector(state => state.cart);

  const onProfileClick = () => {
    setIsProfileOpen(!isProfileOpen);
  };

  const onLogoutClick = () => {
    navigate(RouterPaths.landing);
  };

  const onBurgerButtonClick = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const headerNavItems = navigation.map(({ id, path, text }) => (
    <HeaderNavLink path={path} key={id}>
      {text}
    </HeaderNavLink>
  ));

  return (
    <S.Header>
      <S.LeftNav>
        <S.HeaderBurger onClick={onBurgerButtonClick}>
          {isDrawerOpen ? <CloseIcon /> : <MenuIcon />}
        </S.HeaderBurger>
        <Logo />
      </S.LeftNav>
      <S.RightNav>
        <S.HeaderNav isSearchOpen={isSearchOpen}>{headerNavItems}</S.HeaderNav>
        <HeaderSearch isOpen={isSearchOpen} setIsOpen={setIsSearchOpen} />
        <StyledLink to={RouterPaths.cart}>
          <S.Cart>
            <S.CartIcon>
              {quantity > 0 && (
                <S.CartProductsQuantity>{quantity}</S.CartProductsQuantity>
              )}
              <ShoppingBagOutlinedIcon />
            </S.CartIcon>
            <S.CartCost>${cost.toFixed(2)}</S.CartCost>
          </S.Cart>
        </StyledLink>
        <S.Auth onClick={onProfileClick}>
          <S.AuthIcon>
            <PersonIcon />
          </S.AuthIcon>
          <S.AuthAction>Log in</S.AuthAction>
          <S.ProfileDropdown isOpen={isProfileOpen}>
            <S.ProfileAction>
              <PersonIcon fontSize="small" />
              <S.ProfileLink to={RouterPaths.profile}>Profile</S.ProfileLink>
            </S.ProfileAction>
            <S.ProfileAction>
              <LocalOfferIcon fontSize="small" />
              <S.ProfileLink to={RouterPaths.offers}>Offers</S.ProfileLink>
            </S.ProfileAction>
            <S.ProfileAction>
              <GetAppIcon fontSize="small" />
              <S.ProfileLink to={RouterPaths.purchases}>
                Purchases
              </S.ProfileLink>
            </S.ProfileAction>
            <S.ProfileAction>
              <AddModeratorIcon fontSize="small" />
              <S.ProfileLink to={RouterPaths.membership}>
                Membership
              </S.ProfileLink>
            </S.ProfileAction>
            <S.ProfileAction onClick={onLogoutClick}>
              <LogoutIcon fontSize="small" />
              Log out
            </S.ProfileAction>
          </S.ProfileDropdown>
        </S.Auth>
      </S.RightNav>
      <S.HeaderDrawer isOpen={isDrawerOpen}>
        <S.DrawerNav>
          <DrawerNavLink path={RouterPaths.beats}>
            <Button>
              <MusicNoteIcon sx={{ marginRight: 1 }} />
              beats
            </Button>
          </DrawerNavLink>
          <DrawerNavLink path={RouterPaths.soundKits}>
            <Button>
              <GraphicEqIcon sx={{ marginRight: 1 }} />
              Sound Kits
            </Button>
          </DrawerNavLink>
          <DrawerNavLink path={RouterPaths.collabs}>
            <Button>
              <GroupsIcon sx={{ marginRight: 1 }} />
              Collabs
            </Button>
          </DrawerNavLink>
          <DrawerNavLink path={RouterPaths.contact}>
            <Button>
              <EmailIcon fontSize="small" sx={{ marginRight: 1 }} />
              Contact
            </Button>
          </DrawerNavLink>
          <DrawerNavLink path={RouterPaths.about}>
            <Button>
              <InfoIcon fontSize="small" sx={{ marginRight: 1 }} />
              About
            </Button>
          </DrawerNavLink>
        </S.DrawerNav>
      </S.HeaderDrawer>
    </S.Header>
  );
};
export { ProfileDropdownProps, DrawerProps, NavProps };
export default Header;
