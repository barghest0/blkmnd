import {
  Admin as ReactAdmin,
  RaThemeOptions,
  Resource,
  defaultTheme,
} from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';

import BeatCreate from 'adminComponents/BeatForms/BeatCreate/BeatCreate';
import BeatUpdate from 'adminComponents/BeatForms/BeatUpdate/BeatUpdate';
import SoundKitsList from 'adminComponents/Lists/SoundKitsList/SoundKitsList';
import BeatsList from 'adminComponents/Lists/BeatsList/BeatsList';
import LicensesList from 'adminComponents/Lists/LicensesList/LicensesList';
import SoundKitCreate from 'adminComponents/SoundKitForms/SoundKitCreate/SoundKitCreate';
import SoundKitUpdate from 'adminComponents/SoundKitForms/SoundKitUpdate/SoundKitUpdate';
import ServicesList from 'adminComponents/Lists/ServicesList/ServicesList';
import ServiceCreate from 'adminComponents/ServiceForms/ServiceCreate/ServiceCreate';
import ServiceUpdate from 'adminComponents/ServiceForms/ServiceUpdate/ServiceUpdate';
import LicenseCreate from 'adminComponents/LicensesForms/LicenseCreate/LicenseCreate';
import LicenseUpdate from 'adminComponents/LicensesForms/LicenseUpdate/LicenseUpdate';

const theme: RaThemeOptions = {
  ...defaultTheme,
  palette: {
    mode: 'dark',
  },
};

const Admin = () => (
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

export default Admin;
