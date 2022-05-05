import { PlayerState } from './types';

const PLAYER_SLICE_NAME = 'player';

const PLAYER_INITIAL_STATE: PlayerState = {
  isPlaying: false,
  isOpen: false,
  beat: '',
};

export { PLAYER_INITIAL_STATE, PLAYER_SLICE_NAME };
