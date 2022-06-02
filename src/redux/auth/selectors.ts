import { State } from '../types';

const token = (state: State) => state.auth.token;

const isAuth = (state: State) => state.auth.isAuth;

const user = (state: State) => state.auth.user;

const errors = (state: State) => ({
  loginErrors: state.auth.loginErrors,
  registerErrors: state.auth.registerErrors,
});

const succeses = (state: State) => ({
  isLoginSucces: state.auth.isLoginSuccess,
  isRegisterSucces: state.auth.isRegisterSuccess,
});

const isFetching = (state: State) => state.auth.isFetching;

export { token, isAuth, user, succeses, isFetching, errors };
