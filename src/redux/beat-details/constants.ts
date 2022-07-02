import { BeatDetailsState } from './types';

const BEAT_DETAILS_SLICE_NAME = 'beat/slice';

const BEAT_DETAILS_INITIAL_STATE: BeatDetailsState = {
  beat: null,
  isBeatFetching: false,
  errors: null,
};

const GET_BEAT_NAME = 'beats/separated';
const UPDATE_BEAT_NAME = 'beat/update';

export {
  BEAT_DETAILS_INITIAL_STATE,
  BEAT_DETAILS_SLICE_NAME,
  GET_BEAT_NAME,
  UPDATE_BEAT_NAME,
};
