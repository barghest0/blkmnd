import HeaderSearch from '../HeaderSearch/HeaderSearch';
import Logo from '../Logo/Logo';
import Nav from '../Nav/Nav';
import * as S from './Header.styles';

const Header = () => {
  return (
    <S.Header>
      <Logo />
      <S.RightNav>
        <Nav />
        <HeaderSearch />
      </S.RightNav>
    </S.Header>
  );
};

export default Header;
