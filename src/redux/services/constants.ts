import { ServicesState } from './types';

const SERVICES_SLICE_NAME = 'collabs';

const GET_ALL_SERVICES_NAME = 'collabs/all';

const SERVICES_INITIAL_STATE: ServicesState = {
  services: [],
  isFetching: false,
  errors: null,
};

export { SERVICES_INITIAL_STATE, SERVICES_SLICE_NAME, GET_ALL_SERVICES_NAME };
