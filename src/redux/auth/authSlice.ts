import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from '../user/types';
import { login, register } from './actions';
import { AUTH_INITIAL_STATE, AUTH_SLICE_NAME } from './constants';

const authSlice = createSlice({
  name: AUTH_SLICE_NAME,
  initialState: AUTH_INITIAL_STATE,
  reducers: {},
  extraReducers: {
    [login.fulfilled.type]: (state, action: PayloadAction<User>) => {
      state.isFetching = false;
      state.error = '';
      state.user = action.payload;
    },

    [login.pending.type]: state => {
      state.isFetching = true;
    },

    [login.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isFetching = false;
      state.error = action.payload;
    },

    [register.fulfilled.type]: (state, action: PayloadAction<User>) => {
      state.isFetching = false;
      state.error = '';
      // state.user = action.payload;
    },

    [register.pending.type]: state => {
      state.isFetching = true;
    },

    [register.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isFetching = false;
      state.error = action.payload;
    },
  },
});

export default authSlice;
