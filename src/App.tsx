import { SyntheticEvent, useEffect, useRef } from 'react';
import useTypedSelector from './hooks/redux/useTypedDispatch';
import useActions from './hooks/useActions';
import Router from './shared/router/Router';
import GlobalStyle from './shared/styles/global.styles';
import * as S from './App.style';
import './shared/styles/scss/index.scss';

const App = () => {
  const { beat, isPlaying, currentTime } = useTypedSelector(
    state => state.player,
  );
  const { setDuration, setCurrentTime } = useActions();
  const beatRef = useRef(new Audio());
  const { current: playerBeat } = beatRef;

  useEffect(() => {
    if (beat) {
      playerBeat.src = require(`./audio/${beat.track}`);
    }
    if (!isPlaying) {
      playerBeat.pause();
    } else {
      playerBeat.play();
    }
  }, [isPlaying]);

  const onBeatTimeChange = (event: SyntheticEvent<HTMLAudioElement>) => {
    setCurrentTime(event.currentTarget.currentTime);
  };

  const onLoadedBeatData = () => {
    playerBeat.volume = 0.05;
    playerBeat.currentTime = currentTime;
    setDuration(playerBeat.duration);
  };

  return (
    <S.App>
      <Router />
      <GlobalStyle />
      <S.Player
        ref={beatRef}
        onLoadedData={onLoadedBeatData}
        onTimeUpdate={onBeatTimeChange}
      />
    </S.App>
  );
};

export default App;
