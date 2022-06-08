import { PlayerState } from './types';

const PLAYER_SLICE_NAME = 'player';

const GET_PLAYER_QUEUE_BEATS = 'player/queue';

const PLAYER_INITIAL_STATE: PlayerState = {
  isPlaying: false,
  isOpen: false,
  beat: null,
  nextBeat: null,
  previousBeat: null,
  duration: 0,
  isLoop: false,
  volume: 0.1,
  currentTime: 0,
  isShuffle: false,
  queue: [],
  isFetching: false,
  errors: '',
};

export { PLAYER_INITIAL_STATE, PLAYER_SLICE_NAME, GET_PLAYER_QUEUE_BEATS };
