import { Outlet } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import * as S from './Layout.styles';

const Layout = () => {
  return (
    <S.Layout>
      <Header />
      <S.Page>
        <Outlet />
      </S.Page>
      <Footer />
    </S.Layout>
  );
};

export default Layout;
