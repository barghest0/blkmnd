import { useEffect, useRef } from 'react';
import useTypedSelector from './hooks/redux/useTypedDispatch';
import Router from './shared/router/Router';
import GlobalStyle from './shared/styles/global.styles';
import './shared/styles/scss/index.scss';

const App = () => {
  const { beat, isPlaying } = useTypedSelector(state => state.player);
  const playerBeat = useRef(new Audio());

  useEffect(() => {
    if (!isPlaying) {
      playerBeat.current.pause();
    } else {
      playerBeat.current.play();
    }
  }, [isPlaying]);

  return (
    <>
      <Router />
      <GlobalStyle />
      <audio src={beat} ref={playerBeat} />
    </>
  );
};

export default App;
