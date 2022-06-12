import { BeatsState } from './types';

const BEATS_SLICE_NAME = 'beats/slice';

const GET_FEATURED_BEAT_NAME = 'beats/featured';

const GET_PREVIEW_BEATS_NAME = 'beats/preview';

const GET_ALL_BEATS_NAME = 'beats/all';

const GET_FILTERED_BEATS_NAME = 'beats/filtered';

const GET_BEAT_NAME = 'beats/single';

const UPDATE_BEAT_NAME = 'beat/update';

const BEATS_INITIAL_STATE: BeatsState = {
  beats: [],
  isFetching: false,
  featuredBeat: null,
  beat: null,
  errors: null,
};

export {
  BEATS_SLICE_NAME,
  BEATS_INITIAL_STATE,
  GET_FEATURED_BEAT_NAME,
  GET_PREVIEW_BEATS_NAME,
  GET_ALL_BEATS_NAME,
  GET_FILTERED_BEATS_NAME,
  UPDATE_BEAT_NAME,
  GET_BEAT_NAME,
};
