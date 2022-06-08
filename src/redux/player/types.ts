import { Beat } from 'reduxStore/beats/types';

type PlayerState = {
  isPlaying: boolean;
  isOpen: boolean;
  beat: Beat | null;
  nextBeat: Beat | null;
  previousBeat: Beat | null;
  duration: number;
  currentTime: number;
  volume: number;
  isLoop: boolean;
  isShuffle: boolean;
  queue: Beat[];
  isFetching: boolean;
  errors: string;
};

export { PlayerState };
