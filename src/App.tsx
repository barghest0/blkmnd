import Router from './shared/router/Router';
import GlobalStyle from './shared/styles/global.styles';
import * as S from './App.style';
import './shared/styles/scss/index.scss';
import { ThemeProvider } from '@mui/material';
import theme from './shared/theme/theme';
import DownloadModal from './components/DownloadModal/DownloadModal';
import ShareModal from './components/ShareModal/ShareModal';
import LicensesModal from './components/LicensesModal/LicensesModal';
import BuyModal from './components/BuyModal/BuyModal';
import AuthModal from './components/AuthModal/AuthModal';
import AuthProvider from './hoc/AuthProvider';

const App = () => {
  return (
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <S.App>
          <Router />
          <GlobalStyle />
          <DownloadModal />
          <ShareModal />
          <LicensesModal />
          <BuyModal />
          <AuthModal />
        </S.App>
      </ThemeProvider>
    </AuthProvider>
  );
};

export default App;
