import { PlayerState } from './types';

const PLAYER_SLICE_NAME = 'player';

const PLAYER_INITIAL_STATE: PlayerState = {
  isPlaying: false,
  isOpen: false,
  beat: null,
  volume: 0.1,
  duration: 0,
  currentTime: 0,
};

export { PLAYER_INITIAL_STATE, PLAYER_SLICE_NAME };
