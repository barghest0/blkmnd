import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { getAllCollabs, getCollab } from './actions';
import { COLLABS_INITIAL_STATE, COLLABS_SLICE_NAME } from './constants';
import { Collab } from './types';

const collabs = createSlice({
  name: COLLABS_SLICE_NAME,
  initialState: COLLABS_INITIAL_STATE,
  reducers: {},
  extraReducers: {
    [getAllCollabs.fulfilled.type]: (
      state,
      action: PayloadAction<Collab[]>,
    ) => {
      state.isFetching = false;
      state.errors = null;
      state.collabs = action.payload;
    },

    [getAllCollabs.pending.type]: (state) => {
      state.isFetching = true;
    },

    [getAllCollabs.rejected.type]: (state, action: PayloadAction<any>) => {
      state.isFetching = false;
      state.errors = action.payload;
    },

    [getCollab.fulfilled.type]: (state, action: PayloadAction<Collab>) => {
      state.isFetching = false;
      state.errors = null;
      state.collab = action.payload;
    },

    [getCollab.pending.type]: (state) => {
      state.isFetching = true;
    },

    [getCollab.rejected.type]: (state, action: PayloadAction<any>) => {
      state.isFetching = false;
      state.errors = action.payload;
    },
  },
});

export default collabs;
