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
import 'react-toastify/dist/ReactToastify.css';
import { StyledToastContainer } from './shared/styles/toast';
import PlayerProvider from './hoc/PlayerProvider';
import VisualizerProvider from './hoc/VisualizerProvider';

const App = () => {
  const audio = new Audio();

  return (
    <AuthProvider>
      <VisualizerProvider audio={audio}>
        <PlayerProvider audio={audio}>
          <ThemeProvider theme={theme}>
            <S.App>
              <Router />
              <GlobalStyle />
              <DownloadModal />
              <ShareModal />
              <LicensesModal />
              <BuyModal />
              <AuthModal />
              <StyledToastContainer
                position="bottom-right"
                autoClose={3000}
                hideProgressBar={true}
              />
            </S.App>
          </ThemeProvider>
        </PlayerProvider>
      </VisualizerProvider>
    </AuthProvider>
  );
};

export default App;
