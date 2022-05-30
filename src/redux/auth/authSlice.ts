import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from '../user/types';
import { autoLogin, login, register } from './actions';
import { AUTH_INITIAL_STATE, AUTH_SLICE_NAME } from './constants';
import { LoginResponseValues } from './types';

const authSlice = createSlice({
  name: AUTH_SLICE_NAME,
  initialState: AUTH_INITIAL_STATE,
  reducers: {
    logout: state => {
      state.isAuth = false;
      state.token = null;
      localStorage.removeItem('token');
      state.user = null;
    },
  },
  extraReducers: {
    [login.fulfilled.type]: (
      state,
      action: PayloadAction<LoginResponseValues>,
    ) => {
      const { token } = action.payload;
      state.isFetching = false;
      state.error = '';
      state.token = token;
      state.isAuth = true;
      localStorage.setItem('token', token);
    },

    [login.pending.type]: state => {
      state.isFetching = true;
    },

    [login.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isFetching = false;
      state.error = action.payload;
    },

    [register.fulfilled.type]: state => {
      state.isFetching = false;
      state.error = '';
    },

    [register.pending.type]: state => {
      state.isFetching = true;
    },

    [register.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isFetching = false;
      state.error = action.payload;
    },

    [autoLogin.fulfilled.type]: (state, action: PayloadAction<User>) => {
      state.isFetching = false;
      state.error = '';
      state.user = action.payload;
      state.isAuth = true;
    },

    [autoLogin.pending.type]: state => {
      state.isFetching = true;
    },

    [autoLogin.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isFetching = false;
      state.error = action.payload;
    },
  },
});

export default authSlice;
