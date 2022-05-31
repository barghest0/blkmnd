import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { deleteToken, setToken } from '../../shared/helpers/authHelper';
import { User } from '../user/types';
import { autoLogin, login, register } from './actions';
import { AUTH_INITIAL_STATE, AUTH_SLICE_NAME } from './constants';
import { LoginErrors, LoginResponseValues, RegisterErrors } from './types';

const authSlice = createSlice({
  name: AUTH_SLICE_NAME,
  initialState: AUTH_INITIAL_STATE,
  reducers: {
    logout: state => {
      state.isAuth = false;
      state.token = null;
      state.user = null;
      deleteToken();
    },
  },
  extraReducers: {
    [login.fulfilled.type]: (
      state,
      action: PayloadAction<LoginResponseValues>,
    ) => {
      state.isFetching = false;
      state.loginErrors = null;

      if (action.payload) {
        const { token } = action.payload;
        state.token = token;
        state.isAuth = true;
        state.isLoginSuccess = true;
        setToken(token);
      }
    },

    [login.pending.type]: state => {
      state.isFetching = true;
    },

    [login.rejected.type]: (state, action: PayloadAction<LoginErrors>) => {
      state.isFetching = false;
      state.loginErrors = action.payload;
    },

    [register.fulfilled.type]: (state, action: PayloadAction<User>) => {
      state.isFetching = false;
      state.registerErrors = null;
      state.isRegisterSuccess = true;
    },

    [register.pending.type]: state => {
      state.isFetching = true;
    },

    [register.rejected.type]: (
      state,
      action: PayloadAction<RegisterErrors>,
    ) => {
      state.isFetching = false;
      state.registerErrors = action.payload;
    },

    [autoLogin.fulfilled.type]: (state, action: PayloadAction<User>) => {
      state.isFetching = false;
      state.loginErrors = null;
      state.user = action.payload;
      state.isAuth = true;
    },

    [autoLogin.pending.type]: state => {
      state.isFetching = true;
    },

    [autoLogin.rejected.type]: (state, action: PayloadAction<LoginErrors>) => {
      state.isFetching = false;
      state.loginErrors = action.payload;
    },
  },
});

export default authSlice;
