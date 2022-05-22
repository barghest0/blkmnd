import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { getUserData } from './actions';
import { USER_INITIAL_STATE, USER_SLICE_NAME } from './constants';
import { User } from './types';

const userSlice = createSlice({
  name: USER_SLICE_NAME,
  initialState: USER_INITIAL_STATE,
  reducers: {},
  extraReducers: {
    [getUserData.fulfilled.type]: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
      state.error = '';
    },

    [getUserData.rejected.type]: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
  },
});

export default userSlice;
