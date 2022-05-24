import { Admin as ReactAdmin, RaThemeOptions, Resource } from 'react-admin';
import { defaultTheme } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';

import BeatCreate from './components/BeatForms/BeatCreate/BeatCreate';
import BeatUpdate from './components/BeatForms/BeatUpdate/BeatUpdate';
import SoundKitsList from './components/Lists/SoundKitsList/SoundKitsList';
import BeatsList from './components/Lists/BeatsList/BeatsList';
import LicensesList from './components/Lists/LicensesList/LicensesList';
import SoundKitCreate from './components/SoundKitForms/SoundKitCreate/SoundKitCreate';
import SoundKitUpdate from './components/SoundKitForms/SoundKitUpdate/SoundKitUpdate';
import ServicesList from './components/Lists/ServicesList/ServicesList';
import ServiceCreate from './components/ServiceForms/ServiceCreate/ServiceCreate';
import ServiceUpdate from './components/ServiceForms/ServiceUpdate/ServiceUpdate';
import LicenseCreate from './components/LicensesForms/LicenseCreate/LicenseCreate';
import LicenseUpdate from './components/LicensesForms/LicenseUpdate/LicenseUpdate';

const theme: RaThemeOptions = {
  ...defaultTheme,
  palette: {
    mode: 'dark',
  },
};

const Admin = () => {
  return (
    <ReactAdmin
      theme={theme}
      basename="/admin"
      dataProvider={jsonServerProvider('http://localhost:3000')}
    >
      <Resource
        name="beats"
        list={BeatsList}
        create={BeatCreate}
        edit={BeatUpdate}
      />
      <Resource
        name="soundKits"
        list={SoundKitsList}
        create={SoundKitCreate}
        edit={SoundKitUpdate}
      />
      <Resource
        name="collabs"
        list={ServicesList}
        create={ServiceCreate}
        edit={ServiceUpdate}
      />
      <Resource
        name="licenses"
        list={LicensesList}
        create={LicenseCreate}
        edit={LicenseUpdate}
      />
    </ReactAdmin>
  );
};

export default Admin;
