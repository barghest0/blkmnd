import { Beat } from '../beat/types';

type PlayerState = {
  isPlaying: boolean;
  isOpen: boolean;
  beat: Beat | null;
  volume: number;
  duration: number;
  currentTime: number;
};

export { PlayerState };
