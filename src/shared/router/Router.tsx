import { Route, Routes } from 'react-router-dom';
import RequireAuth from '../../hoc/RequireAuth';
import Beat from '../../pages/Beat/Beat';
import Beats from '../../pages/Beats/Beats';
import Collab from '../../pages/Collab/Collab';
import Collabs from '../../pages/Collabs/Collabs';
import Contact from '../../pages/Contact/Contact';
import Landing from '../../pages/Landing/Landing';
import Layout from '../../pages/Layout/Layout';
import Profile from '../../pages/Profile/Profile';
import SoundKit from '../../pages/SoundKit/SoundKit';
import SoundKits from '../../pages/SoundKits/SoundKits';
import { RouterNames } from './types';

const Router = () => {
  return (
    <Routes>
      <Route path={RouterNames.layout} element={<Layout />}>
        <Route path={RouterNames.landing} element={<Landing />} />
        <Route path={RouterNames.beats} element={<Beats />} />
        <Route path={RouterNames.beat} element={<Beat />} />
        <Route path={RouterNames.soundKits} element={<SoundKits />} />
        <Route path={RouterNames.soundKit} element={<SoundKit />} />
        <Route path={RouterNames.collabs} element={<Collabs />} />
        <Route path={RouterNames.collab} element={<Collab />} />
        <Route path={RouterNames.contact} element={<Contact />} />
        <Route
          path={RouterNames.profile}
          element={
            <RequireAuth>
              <Profile />
            </RequireAuth>
          }
        />
      </Route>
    </Routes>
  );
};

export default Router;
