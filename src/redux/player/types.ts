import { Beat } from 'reduxStore/beats/types';

type PlayerState = {
  isPlaying: boolean;
  isOpen: boolean;
  beat: Beat | null;
  nextBeat: Beat | null;
  previousBeat: Beat | null;
  volume: number;
  duration: number;
  currentTime: number;
  isLoop: boolean;
  isShuffle: boolean;
  queue: Beat[];
  isFetching: boolean;
  errors: string;
};

export { PlayerState };
