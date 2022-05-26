import { useCallback, useEffect, useMemo, useState } from 'react';
import { Beat } from '../redux/beats/types';
import useTypedSelector from './redux/useTypedDispatch';
import useActions from './useActions';

const audio = new Audio();

const useAudio = () => {
  const {
    beat: playerBeat,
    volume,
    isPlaying,
    currentTime,
    isLoop,
    nextBeat,
  } = useTypedSelector(state => state.player);
  const { setBeat, togglePlaying, setDuration, setCurrentTime } = useActions();

  const onAudioTimeUpdate = useCallback(event => {
    setCurrentTime(event.currentTarget.currentTime);
  }, []);

  const onAudioDataLoad = useCallback(event => {
    setDuration(event.target.duration);
    audio.volume = volume;
  }, []);

  const onAudioEnded = useCallback(() => {
    if (nextBeat) {
      setBeat(nextBeat);
    }
  }, []);

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

  const setAudioLoop = useCallback(() => {
    audio.loop = !isLoop;
  }, [isLoop]);

  const setAudioVolume = useCallback(() => {
    audio.volume = volume;
  }, [volume]);

  const setAudioCurrentTime = useCallback(() => {
    audio.currentTime = currentTime;
  }, [currentTime]);

  const setPlayerBeat = useCallback(
    beat => {
      audio.src = beat.track;
      setBeat(beat);
    },
    [playerBeat],
  );

  const toggleAudioPlaying = useCallback(
    (beat: Beat | null) => {
      togglePlaying(beat);
      !isPlaying ? audio.play() : audio.pause();
    },
    [isPlaying, playerBeat],
  );

  return {
    audio,
    setPlayerBeat,
    toggleAudioPlaying,
    setAudioVolume,
    setAudioCurrentTime,
    setAudioLoop,
  };
};

export default useAudio;
