import { PlayerState } from './types';

const PLAYER_SLICE_NAME = 'player';

const GET_PLAYER_QUEUE_BEATS = 'player/queue';

const PLAYER_INITIAL_STATE: PlayerState = {
  isPlaying: false,
  isOpen: false,
  beat: null,
  nextBeat: null,
  previousBeat: null,
  volume: 0.1,
  duration: 0,
  currentTime: 0,
  isLoop: false,
  isShuffle: false,
  queue: [],
  isFetching: false,
  errors: '',
};

export { PLAYER_INITIAL_STATE, PLAYER_SLICE_NAME, GET_PLAYER_QUEUE_BEATS };
