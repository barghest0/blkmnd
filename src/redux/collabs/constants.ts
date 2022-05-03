import { CollabsState } from './types';

const COLLABS_SLICE_NAME = 'collabs';

const COLLABS_INITIAL_STATE: CollabsState = {
  collabs: [],
  isFetching: false,
  error: '',
};

const GET_PREVIEW_COLLABS_NAME = 'collabs/preview';

export { COLLABS_INITIAL_STATE, COLLABS_SLICE_NAME, GET_PREVIEW_COLLABS_NAME };
