import PersonIcon from '@mui/icons-material/Person';
import { useState } from 'react';
import { RouterPaths } from '../../shared/router/types';
import { AddToCartIcon } from '../AddToCardButton/AddToCardButton.style';
import HeaderSearch from '../HeaderSearch/HeaderSearch';
import Logo from '../Logo/Logo';
import Nav from '../Nav/Nav';
import * as S from './Header.styles';

const Header = () => {
  const cost = 0;
  const [isSearchOpen, setIsSearchOpen] = useState(false);
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
        <S.Auth to={RouterPaths.profile}>
          <S.AuthIcon>
            <PersonIcon />
          </S.AuthIcon>
          <S.AuthAction>Log in</S.AuthAction>
        </S.Auth>
      </S.RightNav>
    </S.Header>
  );
};

export default Header;
