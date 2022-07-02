import { BeatsState } from './types';

const BEATS_SLICE_NAME = 'beats/slice';

const GET_ALL_BEATS_NAME = 'beats/all';

const GET_FILTERED_BEATS_NAME = 'beats/filtered';

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
  GET_ALL_BEATS_NAME,
  GET_FILTERED_BEATS_NAME,
};
