import PersonIcon from '@mui/icons-material/Person';
import AddModeratorIcon from '@mui/icons-material/AddModerator';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import GetAppIcon from '@mui/icons-material/GetApp';
import LogoutIcon from '@mui/icons-material/Logout';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

import { useState } from 'react';

import { RouterPaths } from '../../shared/router/types';
import HeaderSearch from '../HeaderSearch/HeaderSearch';
import Logo from '../Logo/Logo';
import Nav from '../Nav/Nav';
import * as S from './Header.styles';
import { useNavigate } from 'react-router-dom';

type ProfileDropdownProps = {
  isOpen: boolean;
};

type DrawerProps = {
  isOpen: boolean;
};

const Header = () => {
  const cost = 0;
  const navigate = useNavigate();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const onProfileClick = () => {
    setIsProfileOpen(!isProfileOpen);
  };

  const onLogoutClick = () => {
    navigate(RouterPaths.landing);
  };

  const onBurgerButtonClick = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <S.Header>
      <S.LeftNav>
        <S.HeaderBurger onClick={onBurgerButtonClick}>
          {isDrawerOpen ? <CloseIcon /> : <MenuIcon />}
        </S.HeaderBurger>
        <Logo />
      </S.LeftNav>
      <S.RightNav>
        <S.HeaderNav>
          <Nav isSearchOpen={isSearchOpen} />
        </S.HeaderNav>
        <HeaderSearch isOpen={isSearchOpen} setIsOpen={setIsSearchOpen} />
        <S.Cart>
          <S.CartIcon>
            <ShoppingBagOutlinedIcon />
          </S.CartIcon>
          <S.CartCost>${cost.toFixed(2)}</S.CartCost>
        </S.Cart>
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
      <S.HeaderDrawer isOpen={isDrawerOpen}>drawer</S.HeaderDrawer>
    </S.Header>
  );
};
export { ProfileDropdownProps, DrawerProps };
export default Header;
