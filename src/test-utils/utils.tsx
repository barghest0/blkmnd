import { FC } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@mui/material';
import { render } from '@testing-library/react';

import AuthProvider from 'hocs/AuthProvider';
import store from 'reduxStore/store';
import theme from 'shared/theme/theme';

type Props = {
  children: React.ReactNode;
};

const mockStore = store();

const MockProviders: FC<Props> = ({ children }) => (
  <BrowserRouter>
    <Provider store={mockStore}>
      <AuthProvider>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </AuthProvider>
    </Provider>
  </BrowserRouter>
);

const customRender = (ui, options?) =>
  render(ui, { wrapper: MockProviders, ...options });

const mockDispatch = mockStore.dispatch;

export { customRender as render, mockDispatch };
