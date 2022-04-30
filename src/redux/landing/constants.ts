import { LandingState } from './types';

const LANDING_SLICE_NAME = 'landing-slice';

const GET_PREVIEW_BEAT_NAME = 'beats/preview';

const LANDING_INITIAL_STATE: LandingState = {
  previewBeat: null,
  isFetching: false,
  error: '',
};

export { LANDING_SLICE_NAME, LANDING_INITIAL_STATE, GET_PREVIEW_BEAT_NAME };
