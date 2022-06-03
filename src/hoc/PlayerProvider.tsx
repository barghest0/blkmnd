import { FC, memo, useCallback, useEffect } from 'react';
import PlayerContext from '../context/PlayerContext';
import useTypedSelector from '../hooks/redux/useTypedDispatch';
import useActions from '../hooks/useActions';
import * as playerSelectors from '../redux/player/selectors';

type Props = {
  children: React.ReactNode;
  audio: HTMLAudioElement;
};

const PlayerProvider: FC<Props> = memo(({ children, audio }) => {
  const playerState = useTypedSelector(playerSelectors.fullState);
  const { currentPlayerBeat, nextPlayerBeat } = useTypedSelector(
    playerSelectors.beats,
  );
  const { isPlayerPlaying } = useTypedSelector(playerSelectors.state);
  const { audioVolume, audioLoop } = useTypedSelector(playerSelectors.controls);

  const { setCurrentTime, setDuration, setBeat } = useActions();

  const onAudioTimeUpdate = useCallback(event => {
    setCurrentTime(event.currentTarget.currentTime);
  }, []);

  const onAudioDataLoad = useCallback(event => {
    setDuration(event.target.duration);
    audio.volume = audioVolume;
  }, []);

  const onAudioEnded = () => {
    if (nextPlayerBeat) {
      setBeat(nextPlayerBeat);
    }
  };

  useEffect(() => {
    audio.crossOrigin = 'anonymous';
    audio.addEventListener('timeupdate', onAudioTimeUpdate);
    audio.addEventListener('loadeddata', onAudioDataLoad);
    audio.addEventListener('ended', onAudioEnded);
    return () => {
      audio.removeEventListener('loadeddata', onAudioDataLoad);
      audio.removeEventListener('timeupdate', onAudioTimeUpdate);
      audio.removeEventListener('ended', onAudioEnded);
    };
  }, []);

  useEffect(() => {
    if (currentPlayerBeat) {
      audio.src = currentPlayerBeat.track;
    }
  }, [currentPlayerBeat]);

  useEffect(() => {
    if (isPlayerPlaying) {
      audio.play();
    } else {
      audio.pause();
    }
  }, [isPlayerPlaying, currentPlayerBeat]);

  useEffect(() => {
    audio.volume = audioVolume;
  }, [audioVolume]);

  useEffect(() => {
    audio.loop = audioLoop;
  }, [audioLoop]);

  return (
    <PlayerContext.Provider value={{ state: playerState, audio }}>
      {children}
    </PlayerContext.Provider>
  );
});

export default PlayerProvider;
