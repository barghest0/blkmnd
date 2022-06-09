import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from 'reduxStore/store';

import App from './App';

const AppStore = store();

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <BrowserRouter>
    <Provider store={AppStore}>
      <App />
    </Provider>
  </BrowserRouter>,
);
