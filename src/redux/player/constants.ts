import { PlayerState } from './types';

const PLAYER_SLICE_NAME = 'player';

const GET_PLAYER_QUEUE_BEATS = 'player/queue';

const PLAYER_INITIAL_STATE: PlayerState = {
  isPlaying: false,
  isOpen: false,
  beat: null,
  volume: 0.3,
  duration: 0,
  currentTime: 0,
  queue: [],
  isFetching: false,
  error: '',
};

export { PLAYER_INITIAL_STATE, PLAYER_SLICE_NAME, GET_PLAYER_QUEUE_BEATS };
