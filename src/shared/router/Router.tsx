import { AnimatePresence } from 'framer-motion';
import { Route, Routes, useLocation } from 'react-router-dom';
import PageTransition from '../../hoc/PageTransition';
import RequireAdmin from '../../hoc/RequireAdmin';
import RequireAuth from '../../hoc/RequireAuth';
import CRUDBeat from '../../pages/CRUDBeat/CRUDBeat';
import About from '../../pages/About/About';
import Admin from '../../pages/Admin/Admin';
import Beat from '../../pages/Beat/Beat';
import Beats from '../../pages/Beats/Beats';
import Collab from '../../pages/Collab/Collab';
import Collabs from '../../pages/Collabs/Collabs';
import Contact from '../../pages/Contact/Contact';
import Landing from '../../pages/Landing/Landing';
import Layout from '../../pages/Layout/Layout';
import Membership from '../../pages/Membership/Membership';
import Offers from '../../pages/Offers/Offers';
import Profile from '../../pages/Profile/Profile';
import Purchases from '../../pages/Purchases/Purchases';
import SoundKit from '../../pages/SoundKit/SoundKit';
import SoundKits from '../../pages/SoundKits/SoundKits';
import { RouterNames } from './types';

const Router = () => {
  const location = useLocation();

  return (
    <AnimatePresence exitBeforeEnter>
      <Routes location={location} key={location.pathname}>
        <Route path={RouterNames.layout} element={<Layout />}>
          <Route
            path={RouterNames.admin}
            element={
              <PageTransition>
                <RequireAdmin>
                  <Admin />
                </RequireAdmin>
              </PageTransition>
            }
          />
          <Route
            path={RouterNames.landing}
            element={
              <PageTransition>
                <Landing />
              </PageTransition>
            }
          />
          <Route
            path={RouterNames.beats}
            element={
              <PageTransition>
                <Beats />
              </PageTransition>
            }
          />
          <Route
            path={RouterNames.crudBeat}
            element={
              <PageTransition>
                <RequireAdmin>
                  <CRUDBeat />
                </RequireAdmin>
              </PageTransition>
            }
          />
          <Route
            path={RouterNames.beat}
            element={
              <PageTransition>
                <Beat />
              </PageTransition>
            }
          />
          <Route
            path={RouterNames.soundKits}
            element={
              <PageTransition>
                <SoundKits />
              </PageTransition>
            }
          />
          <Route
            path={RouterNames.soundKit}
            element={
              <PageTransition>
                <SoundKit />
              </PageTransition>
            }
          />
          <Route
            path={RouterNames.collabs}
            element={
              <PageTransition>
                <Collabs />
              </PageTransition>
            }
          />
          <Route
            path={RouterNames.collab}
            element={
              <PageTransition>
                <Collab />
              </PageTransition>
            }
          />
          <Route
            path={RouterNames.contact}
            element={
              <PageTransition>
                <Contact />
              </PageTransition>
            }
          />
          <Route
            path={RouterNames.about}
            element={
              <PageTransition>
                <About />
              </PageTransition>
            }
          />
          <Route
            path={RouterNames.purchases}
            element={
              <PageTransition>
                <RequireAuth>
                  <Purchases />
                </RequireAuth>
              </PageTransition>
            }
          />
          <Route
            path={RouterNames.offers}
            element={
              <PageTransition>
                <RequireAuth>
                  <Offers />
                </RequireAuth>
              </PageTransition>
            }
          />
          <Route
            path={RouterNames.membership}
            element={
              <PageTransition>
                <RequireAuth>
                  <Membership />
                </RequireAuth>
              </PageTransition>
            }
          />
          <Route
            path={RouterNames.profile}
            element={
              <PageTransition>
                <RequireAuth>
                  <Profile />
                </RequireAuth>
              </PageTransition>
            }
          />
        </Route>
      </Routes>
    </AnimatePresence>
  );
};

export default Router;
