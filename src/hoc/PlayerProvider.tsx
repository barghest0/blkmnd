import { FC, memo, useCallback, useEffect } from 'react';
import PlayerContext from '../context/PlayerContext';
import useTypedSelector from '../hooks/redux/useTypedDispatch';
import useActions from '../hooks/useActions';

type Props = {
  children: React.ReactNode;
  audio: HTMLAudioElement;
};

const PlayerProvider: FC<Props> = memo(({ children, audio }) => {
  const playerState = useTypedSelector(state => state.player);
  const { beat: playerBeat, isPlaying, volume, nextBeat, isLoop } = playerState;
  const state = playerState;

  const { setCurrentTime, setDuration, setBeat } = useActions();

  const onAudioTimeUpdate = useCallback(event => {
    setCurrentTime(event.currentTarget.currentTime);
  }, []);

  const onAudioDataLoad = useCallback(event => {
    setDuration(event.target.duration);
    audio.volume = volume;
  }, []);

  const onAudioEnded = () => {
    if (nextBeat) {
      setBeat(nextBeat);
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
    if (playerBeat) {
      audio.src = playerBeat.track;
    }
  }, [playerBeat]);

  useEffect(() => {
    if (isPlaying) {
      audio.play();
    } else {
      audio.pause();
    }
  }, [isPlaying, playerBeat]);

  useEffect(() => {
    audio.volume = volume;
  }, [volume]);

  useEffect(() => {
    audio.loop = isLoop;
  }, [isLoop]);

  return (
    <PlayerContext.Provider value={{ state, audio }}>
      {children}
    </PlayerContext.Provider>
  );
});

export default PlayerProvider;
