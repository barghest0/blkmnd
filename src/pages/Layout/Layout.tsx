import { Outlet } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Player from '../../components/Player/Player';
import * as S from './Layout.styles';
import { useRef } from 'react';
import useTypedSelector from '../../hooks/redux/useTypedDispatch';
import Audio from '../../components/Audio/Audio';

const Layout = () => {
  const audioRef = useRef(null);

  const { beat } = useTypedSelector(state => state.player);

  return (
    <S.Layout>
      <Header />
      <S.Page>
        <Outlet context={{ audioRef }} />
        <Player audioRef={audioRef} />
        {beat && (
          <Audio ref={audioRef} src={require(`../../audio/${beat.track}`)} />
        )}
      </S.Page>
      <Footer />
    </S.Layout>
  );
};

export default Layout;
