import { Outlet } from 'react-router-dom';

import { motion } from 'framer-motion';

import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Player from '../../components/Player/Player';
import * as S from './Layout.styles';
import { memo, useEffect, useRef } from 'react';
import useTypedSelector from '../../hooks/redux/useTypedDispatch';
import Audio from '../../components/Audio/Audio';
import DownloadModal from '../../components/DownloadModal/DownloadModal';
import ShareModal from '../../components/ShareModal/ShareModal';
import LicensesModal from '../../components/LicensesModal/LicensesModal';
import BuyModal from '../../components/BuyModal/BuyModal';
import useActions from '../../hooks/useActions';
import AuthModal from '../../components/AuthModal/AuthModal';

const Layout = memo(() => {
  const audioRef = useRef(null);

  const { beat } = useTypedSelector(state => state.player);

  const { getCart } = useActions();

  useEffect(() => {
    getCart();
  }, []);

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
        <AuthModal />
      </S.Page>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3, delay: 0.1 }}
      >
        <Footer />
      </motion.div>
    </S.Layout>
  );
});

export default Layout;
