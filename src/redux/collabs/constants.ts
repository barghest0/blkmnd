import { CollabsState } from './types';

const COLLABS_SLICE_NAME = 'collabs';

const GET_PREVIEW_COLLABS_NAME = 'collabs/preview';

const GET_ALL_COLABS_NAME = 'collabs/all';

const GET_COLLAB_NAME = 'collabs/single';

const COLLABS_INITIAL_STATE: CollabsState = {
  collabs: [],
  collab: null,
  isFetching: false,
  errors: null,
};

export {
  COLLABS_INITIAL_STATE,
  COLLABS_SLICE_NAME,
  GET_PREVIEW_COLLABS_NAME,
  GET_ALL_COLABS_NAME,
  GET_COLLAB_NAME,
};
