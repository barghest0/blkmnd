import { State } from '../types';

const token = (state: State) => state.auth.token;

const isAuth = (state: State) => state.auth.isAuth;

const user = (state: State) => state.auth.user;

const errors = (state: State) => ({
  login: state.auth.loginErrors,
  register: state.auth.registerErrors,
});

const succeses = (state: State) => ({
  login: state.auth.isLoginSuccess,
  register: state.auth.isRegisterSuccess,
});

const isFetching = (state: State) => state.auth.isFetching;

export { token, isAuth, user, succeses, isFetching, errors };
