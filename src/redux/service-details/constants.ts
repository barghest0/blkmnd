import { ServiceDetailsState } from './types';

const SERVICE_DETAILS_SLICE_NAME = 'service-details-state';

const GET_SERVICE_DETAILS_NAME = 'service-details';

const SERVICE_DETAILS_INITIAL_STATE: ServiceDetailsState = {
  service: null,
  isFetching: false,
  errors: null,
};

export {
  GET_SERVICE_DETAILS_NAME,
  SERVICE_DETAILS_INITIAL_STATE,
  SERVICE_DETAILS_SLICE_NAME,
};
