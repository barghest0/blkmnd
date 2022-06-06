import { ThemeProvider } from '@mui/material';
import 'react-toastify/dist/ReactToastify.css';

import DownloadModal from 'components/DownloadModal/DownloadModal';
import ShareModal from 'components/ShareModal/ShareModal';
import LicensesModal from 'components/LicensesModal/LicensesModal';
import BuyModal from 'components/BuyModal/BuyModal';
import AuthModal from 'components/AuthModal/AuthModal';
import AuthProvider from 'hocs/AuthProvider';
import PlayerProvider from 'hocs/PlayerProvider';
import VisualizerProvider from 'hocs/VisualizerProvider';
import Router from 'shared/router/Router';
import theme from 'shared/theme/theme';
import GlobalStyle from 'shared/styles/global.styles';
import { StyledToastContainer } from 'shared/styles/toast';

import 'shared/styles/scss/index.scss';

import * as S from './App.style';

function App() {
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
                hideProgressBar
              />
            </S.App>
          </ThemeProvider>
        </PlayerProvider>
      </VisualizerProvider>
    </AuthProvider>
  );
}

export default App;
