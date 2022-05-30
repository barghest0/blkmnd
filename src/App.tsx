import Router from './shared/router/Router';
import GlobalStyle from './shared/styles/global.styles';
import * as S from './App.style';
import './shared/styles/scss/index.scss';
import { ThemeProvider } from '@mui/material';
import theme from './shared/theme/theme';
import useActions from './hooks/useActions';
import { useEffect } from 'react';
import useTypedSelector from './hooks/redux/useTypedDispatch';
import { getToken } from './shared/helpers/authHelper';

const App = () => {
  const { autoLogin } = useActions();
  const { token } = useTypedSelector(state => state.auth);

  useEffect(() => {
    if (token) {
      autoLogin(getToken());
    }
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <S.App>
        <Router />
        <GlobalStyle />
      </S.App>
    </ThemeProvider>
  );
};

export default App;
