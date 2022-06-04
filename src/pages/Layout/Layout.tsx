import { memo, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { motion } from 'framer-motion';

import Footer from 'components/Footer/Footer';
import Header from 'components/Header/Header';
import Player from 'components/Player/Player';
import useActions from 'hooks/useActions';

import * as S from './Layout.styles';

const Layout = memo(() => {
  const { getCart } = useActions();

  useEffect(() => {
    getCart();
  }, []);

  return (
    <S.Layout>
      <Header />
      <S.Page>
        <Outlet />
        <Player />
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
