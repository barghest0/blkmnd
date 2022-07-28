import { ProfileState } from './types';

const PROFILE_SLICE_NAME = 'profile';

const PROFILE_INITIAL_STATE: ProfileState = {
  profileDetails: null,
  isFetching: false,
  errors: null,
};

const GET_PROFILE_DATA_NAME = 'profile/me';

export { PROFILE_INITIAL_STATE, PROFILE_SLICE_NAME, GET_PROFILE_DATA_NAME };
