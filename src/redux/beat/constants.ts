import { BeatState } from './types';

const BEAT_SLICE_NAME = 'beats/slice';

const GET_FEATURED_BEAT_NAME = 'beats/featured';

const GET_BEAT_NAME = 'beat/content';

const BEAT_INITIAL_STATE: BeatState = {
  beat: null,
  featuredBeat: null,
  error: '',
};

export {
  BEAT_SLICE_NAME,
  BEAT_INITIAL_STATE,
  GET_FEATURED_BEAT_NAME,
  GET_BEAT_NAME,
};
