import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { getUserData } from './actions';
import { USER_INITIAL_STATE, USER_SLICE_NAME } from './constants';
import { User } from './types';

const user = createSlice({
  name: USER_SLICE_NAME,
  initialState: USER_INITIAL_STATE,
  reducers: {},
  extraReducers: {
    [getUserData.fulfilled.type]: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
      state.errors = null;
      state.isFetching = false;
    },

    [getUserData.pending.type]: (state) => {
      state.isFetching = true;
    },

    [getUserData.rejected.type]: (state, action: PayloadAction<any>) => {
      state.errors = action.payload;

      state.isFetching = false;
    },
  },
});

export default user;
