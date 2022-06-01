import { FC, memo, useEffect } from 'react';
import PlayerContext from '../context/PlayerContext';
import useTypedSelector from '../hooks/redux/useTypedDispatch';

type Props = {
  children: React.ReactNode;
  audio: HTMLAudioElement;
};

const PlayerProvider: FC<Props> = memo(({ children, audio }) => {
  const playerState = useTypedSelector(state => state.player);
  const { beat: playerBeat, isPlaying, volume } = playerState;
  const state = playerState;

  useEffect(() => {
    audio.crossOrigin = 'anonymous';
    audio.volume = volume;
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

  return (
    <PlayerContext.Provider value={{ state, audio }}>
      {children}
    </PlayerContext.Provider>
  );
});

export default PlayerProvider;
