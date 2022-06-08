import { useContext, useState } from 'react';
import { toast } from 'react-toastify';
import { Button } from '@mui/material';
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

import HeaderSearch from 'components/HeaderSearch/HeaderSearch';
import Logo from 'components/Logo/Logo';
import HeaderNavLink from 'components/HeaderNavLink/HeaderNavLink';
import DrawerNavLink from 'components/DrawerNavLink/DrawerNavLink';
import { RouterPaths } from 'shared/router/types';
import navigation from 'shared/router/navigation';
import { StyledLink } from 'shared/styles/links';
import { convertPrice } from 'shared/helpers/priceHelper';
import useTypedSelector from 'hooks/redux/useTypedDispatch';
import useActions from 'hooks/useActions';
import AuthContext from 'contexts/AuthContext';
import { ModalsTypes } from 'reduxStore/modals/types';
import * as cartSelectors from 'reduxStore/cart/selectors';

import * as S from './Header.styles';

const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const { productsQuantity, totalCartPrice } = useTypedSelector(
    cartSelectors.details,
  );
  const { setModalVisability, logout } = useActions();

  const { user, isAuth } = useContext(AuthContext);

  const onProfileClick = () => {
    if (isAuth) {
      setIsProfileOpen(!isProfileOpen);
    } else {
      setModalVisability({ visability: true, modalType: ModalsTypes.auth });
    }
  };

  const showLogoutToast = () =>
    toast.success('Вы успешно вышли из личного кабинета');

  const onLogoutClick = () => {
    logout();
    showLogoutToast();
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
        <S.Logo>
          <Logo />
        </S.Logo>
      </S.LeftNav>
      <S.RightNav>
        <S.HeaderNav isSearchOpen={isSearchOpen}>{headerNavItems}</S.HeaderNav>
        <S.Search>
          <HeaderSearch isOpen={isSearchOpen} setIsOpen={setIsSearchOpen} />
        </S.Search>
        <StyledLink to={RouterPaths.cart}>
          <S.Cart>
            <S.CartIcon>
              {productsQuantity > 0 && (
                <S.CartProductsQuantity>
                  {productsQuantity}
                </S.CartProductsQuantity>
              )}
              <ShoppingBagOutlinedIcon />
            </S.CartIcon>
            <S.CartCost>{convertPrice(totalCartPrice)}</S.CartCost>
          </S.Cart>
        </StyledLink>
        <S.Auth onClick={onProfileClick}>
          <S.AuthIcon>
            <PersonIcon />
          </S.AuthIcon>
          <S.AuthAction>
            {isAuth && user ? user.username : 'Log in'}
          </S.AuthAction>
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
export default Header;
