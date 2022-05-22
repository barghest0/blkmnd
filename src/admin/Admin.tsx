import { Admin as ReactAdmin, ListGuesser, Resource } from 'react-admin';
import { defaultTheme } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';

import BeatCreate from './components/BeatForms/BeatCreate/BeatCreate';

const theme = {
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
      <Resource name="beats" list={ListGuesser} create={BeatCreate} />
      <Resource name="soundKits" list={ListGuesser} />
      <Resource name="collabs" list={ListGuesser} />
      <Resource name="licenses" list={ListGuesser} />
      <Resource name="cart" list={ListGuesser} />
      <Resource name="tags" list={ListGuesser} />
    </ReactAdmin>
  );
};

export default Admin;
