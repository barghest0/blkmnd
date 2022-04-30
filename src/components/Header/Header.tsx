import Logo from '../Logo/Logo';
import Nav from '../Nav/Nav';
import * as S from './Header.styles';

const Header = () => {
  return (
    <S.Header>
      <Logo />
      <Nav />
    </S.Header>
  );
};

export default Header;
