import { LicenseState } from './types';

const LICENSE_SLICE_NAME = 'license';

const GET_LICENSES_NAME = 'license/all';

const LICENSE_INITIAL_STATE: LicenseState = {
  licenses: [],
  isFetching: false,
  error: '',
};

export { LICENSE_INITIAL_STATE, LICENSE_SLICE_NAME, GET_LICENSES_NAME };
