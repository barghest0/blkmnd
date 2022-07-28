import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { getProfileData } from './actions';
import { PROFILE_INITIAL_STATE, PROFILE_SLICE_NAME } from './constants';
import { User } from './types';

const profile = createSlice({
  name: PROFILE_SLICE_NAME,
  initialState: PROFILE_INITIAL_STATE,
  reducers: {},
  extraReducers: {
    [getProfileData.fulfilled.type]: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
      state.errors = null;
      state.isFetching = false;
    },

    [getProfileData.pending.type]: (state) => {
      state.isFetching = true;
    },

    [getProfileData.rejected.type]: (state, action: PayloadAction<any>) => {
      state.errors = action.payload;

      state.isFetching = false;
    },
  },
});

export default profile;
