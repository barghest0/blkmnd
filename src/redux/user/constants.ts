import { UserState } from './types';

const USER_SLICE_NAME = 'user';

const USER_INITIAL_STATE: UserState = {
  user: null,
  isFetching: false,
  errors: null,
};

const GET_USER_DATA_NAME = 'user/me';

export { USER_INITIAL_STATE, USER_SLICE_NAME, GET_USER_DATA_NAME };
