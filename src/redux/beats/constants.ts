import { BeatsState } from './types';

const BEATS_SLICE_NAME = 'landing-slice';

const GET_FEATURED_BEAT_NAME = 'beats/featured';

const GET_PREVIEW_BEATS_NAME = 'beats/preview';

const BEATS_INITIAL_STATE: BeatsState = {
  featuredBeat: null,
  beats: [],
  isFetching: false,
  error: '',
};

export {
  BEATS_SLICE_NAME,
  BEATS_INITIAL_STATE,
  GET_FEATURED_BEAT_NAME,
  GET_PREVIEW_BEATS_NAME,
};
