import { getToken } from 'shared/helpers/authHelper';

import { AuthState } from './types';

const AUTH_SLICE_NAME = 'auth';

const AUTH_INITIAL_STATE: AuthState = {
  token: getToken(),
  isAuth: false,
  user: null,
  isLoginSuccess: false,
  isRegisterSuccess: false,
  isFetching: false,
  registerErrors: null,
  loginErrors: null,
};

const LOGIN_NAME = 'login';

const REGISTER_NAME = 'register';

const AUTO_LOGIN_NAME = 'auto-login';

export {
  AUTH_INITIAL_STATE,
  AUTH_SLICE_NAME,
  LOGIN_NAME,
  REGISTER_NAME,
  AUTO_LOGIN_NAME,
};
