import { Route, Routes } from 'react-router-dom';
import Beats from '../../pages/Beats/Beats';
import Collabs from '../../pages/Collabs/Collabs';
import Contact from '../../pages/Contact/Contact';
import Landing from '../../pages/Landing/Landing';
import Layout from '../../pages/Layout/Layout';
import SoundKits from '../../pages/SoundKits/SoundKits';
import { RouterNames } from './types';

const Router = () => {
  return (
    <Routes>
      <Route path={RouterNames.layout} element={<Layout />}>
        <Route path={RouterNames.landing} element={<Landing />} />
        <Route path={RouterNames.beats} element={<Beats />} />
        <Route path={RouterNames.soundKits} element={<SoundKits />} />
        <Route path={RouterNames.collabs} element={<Collabs />} />
        <Route path={RouterNames.contact} element={<Contact />} />
      </Route>
    </Routes>
  );
};

export default Router;
