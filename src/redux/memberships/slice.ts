import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { getMemberships } from './actions';
import { MEMBERSHIPS_INITIAL_STATE, MEMBERSHIPS_SLICE_NAME } from './constants';
import { Membership } from './types';

const memberships = createSlice({
  name: MEMBERSHIPS_SLICE_NAME,
  initialState: MEMBERSHIPS_INITIAL_STATE,
  reducers: {},
  extraReducers: {
    [getMemberships.fulfilled.type]: (
      state,
      action: PayloadAction<Membership[]>,
    ) => {
      state.isFetching = false;
      state.errors = null;
      state.memberships = action.payload;
    },

    [getMemberships.pending.type]: (state) => {
      state.isFetching = true;
    },

    [getMemberships.rejected.type]: (state, action: PayloadAction<any>) => {
      state.isFetching = false;
      state.errors = action.payload;
    },
  },
});

export default memberships;
