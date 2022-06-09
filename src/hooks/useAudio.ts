import { useCallback, useContext } from 'react';

import PlayerContext from 'contexts/PlayerContext';

const useAudio = () => {
  const { audio } = useContext(PlayerContext);

  const setAudioVolume = useCallback((volume: number) => {
    audio.volume = volume;
  }, []);

  const toggleAudioLoop = useCallback(() => {
    audio.loop = !audio.loop;
  }, []);

  const setAudioCurrentTime = useCallback((currentTime: number) => {
    audio.currentTime = currentTime;
  }, []);

  return { setAudioVolume, toggleAudioLoop, setAudioCurrentTime };
};

export default useAudio;
