import { State } from 'reduxStore/types';

const authAccessToken = ({ auth: { token } }: State) => token;

const isUserAuth = ({ auth: { isAuth } }: State) => isAuth;

const userInfo = ({ auth: { user } }: State) => user;

const authErrors = ({ auth: { loginErrors, registerErrors } }: State) => ({
  loginErrors,
  registerErrors,
});

const authSuccesses = ({
  auth: { isLoginSuccess, isRegisterSuccess },
}: State) => ({
  isLoginSuccess,
  isRegisterSuccess,
});

const isAuthFetching = ({ auth: { isFetching } }: State) => isFetching;

export {
  authAccessToken,
  isUserAuth,
  userInfo,
  isAuthFetching,
  authSuccesses,
  authErrors,
};
