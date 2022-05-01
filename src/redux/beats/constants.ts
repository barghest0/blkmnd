import { BeatsState } from './types';

const BEATS_SLICE_NAME = 'landing-slice';

const GET_PREVIEW_BEAT_NAME = 'beats/preview';

const BEATS_INITIAL_STATE: BeatsState = {
  previewBeat: null,
  beats: [],
  isFetching: false,
  error: '',
};

export { BEATS_SLICE_NAME, BEATS_INITIAL_STATE, GET_PREVIEW_BEAT_NAME };
