import PersonIcon from '@mui/icons-material/Person';
import AddModeratorIcon from '@mui/icons-material/AddModerator';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import GetAppIcon from '@mui/icons-material/GetApp';
import LogoutIcon from '@mui/icons-material/Logout';
import { useState, useEffect, useRef } from 'react';
import { RouterPaths } from '../../shared/router/types';
import { AddToCartIcon } from '../AddToCardButton/AddToCardButton.style';
import HeaderSearch from '../HeaderSearch/HeaderSearch';
import Logo from '../Logo/Logo';
import Nav from '../Nav/Nav';
import * as S from './Header.styles';

type ProfileDropdownProps = {
  isOpen: boolean;
};

const Header = () => {
  const cost = 0;
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const onProfileClick = () => {
    setIsProfileOpen(!isProfileOpen);
  };

  return (
    <S.Header>
      <Logo />
      <S.RightNav>
        <Nav isSearchOpen={isSearchOpen} />
        <HeaderSearch isOpen={isSearchOpen} setIsOpen={setIsSearchOpen} />
        <S.Cart>
          <S.CartIcon>
            <AddToCartIcon />
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
            <S.ProfileAction>
              <LogoutIcon fontSize="small" />
              Log out
            </S.ProfileAction>
          </S.ProfileDropdown>
        </S.Auth>
      </S.RightNav>
    </S.Header>
  );
};
export { ProfileDropdownProps };
export default Header;
