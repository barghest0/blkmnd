import Router from './shared/router/Router';
import GlobalStyle from './shared/styles/global.styles';
import * as S from './App.style';
import './shared/styles/scss/index.scss';
import { ThemeProvider } from '@mui/material';
import theme from './shared/theme/theme';

const App = () => {

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
