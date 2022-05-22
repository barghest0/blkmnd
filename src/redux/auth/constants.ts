import { AuthState } from './types';

const AUTH_SLICE_NAME = 'auth';

const AUTH_INITIAL_STATE: AuthState = {
  token: localStorage.getItem('token'),
  isAuth: false,
  user: null,
  isFetching: false,
  error: '',
};

const LOGIN_NAME = 'login';

const REGISTER_NAME = 'register';

export { AUTH_INITIAL_STATE, AUTH_SLICE_NAME, LOGIN_NAME, REGISTER_NAME };
