import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from 'reduxStore/store';

import App from './App';

const AppStore = store();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={AppStore}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
