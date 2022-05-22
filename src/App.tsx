import Router from './shared/router/Router';
import GlobalStyle from './shared/styles/global.styles';
import * as S from './App.style';
import './shared/styles/scss/index.scss';
import { ThemeProvider } from '@mui/material';
import theme from './shared/theme/theme';

import useTypedSelector from './hooks/redux/useTypedDispatch';
import Audio from './components/Audio/Audio';

const App = () => {
  const audioRef = useRef(null);
  const { beat } = useTypedSelector(state => state.player);
  return (
    <ThemeProvider theme={theme}>
      <S.App>
        {beat && <Audio ref={audioRef} src={beat.track} />}
        <Router />
        <GlobalStyle />
      </S.App>
    </ThemeProvider>
  );
};

export default App;
