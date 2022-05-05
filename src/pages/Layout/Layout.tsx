import { Outlet } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Player from '../../components/Player/Player';
import * as S from './Layout.styles';

const Layout = () => {
  return (
    <S.Layout>
      <Header />
      <S.Page>
        <Outlet />
        <Player />
      </S.Page>
      <Footer />
    </S.Layout>
  );
};

export default Layout;
