import { Outlet } from 'react-router-dom';
import Header from '../../components/Header/Header';
import * as S from './Layout.styles';

const Layout = () => {
  return (
    <div>
      <Header />
      <S.Page>
        <Outlet />
      </S.Page>
    </div>
  );
};

export default Layout;
