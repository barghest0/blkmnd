import { Outlet } from 'react-router-dom';

import { motion } from 'framer-motion';

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
        {beat && <Audio ref={audioRef} src={beat.track} />}
        <DownloadModal />
        <ShareModal />
        <LicensesModal />
        <BuyModal />
      </S.Page>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Footer />
      </motion.div>
    </S.Layout>
  );
});

export default Layout;
