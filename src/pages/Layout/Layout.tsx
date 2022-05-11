import { Outlet } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Player from '../../components/Player/Player';
import * as S from './Layout.styles';
import { memo, useRef } from 'react';
import useTypedSelector from '../../hooks/redux/useTypedDispatch';
import Audio from '../../components/Audio/Audio';
import DownloadModal from '../../components/DownloadModal/DownloadModal';
import ShareModal from '../../components/ShareModal/ShareModal';
import LicensesModal from '../../components/LicensesModal/LicensesModal';
import BuyModal from '../../components/BuyModal/BuyModal';

const Layout = memo(() => {
  const audioRef = useRef(null);

  const { beat } = useTypedSelector(state => state.player);

  return (
    <S.Layout>
      <Header />
      <S.Page>
        <Outlet context={{ audio: audioRef }} />
        <Player audioRef={audioRef} />
        {beat && (
          <Audio ref={audioRef} src={require(`../../audio/${beat.track}`)} />
        )}
        <DownloadModal />
        <ShareModal />
        <LicensesModal />
        <BuyModal />
      </S.Page>
      <Footer />
    </S.Layout>
  );
});

export default Layout;
