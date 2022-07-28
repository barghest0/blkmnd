import { LicenseState } from './types';

const LICENSE_SLICE_NAME = 'license';

const LICENSE_INITIAL_STATE: LicenseState = {
  licenses: [],
  license: null,
  isFetching: false,
  errors: null,
};

const GET_LICENSE_NAME = 'license/single';

export { LICENSE_INITIAL_STATE, LICENSE_SLICE_NAME, GET_LICENSE_NAME };
