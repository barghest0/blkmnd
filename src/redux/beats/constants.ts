import { BeatsState } from './types';

const BEATS_SLICE_NAME = 'beats/slice';

const GET_FEATURED_BEAT_NAME = 'beats/featured';

const GET_PREVIEW_BEATS_NAME = 'beats/preview';

const GET_BEAT_NAME = 'beat/content';

const BEATS_INITIAL_STATE: BeatsState = {
  beats: [],
  isFetching: false,
  error: '',
};

export {
  BEATS_SLICE_NAME,
  BEATS_INITIAL_STATE,
  GET_FEATURED_BEAT_NAME,
  GET_PREVIEW_BEATS_NAME,
  GET_BEAT_NAME,
};
