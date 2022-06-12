import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { getPreviewCollabs, getAllCollabs, getCollab } from './actions';
import { COLLABS_INITIAL_STATE, COLLABS_SLICE_NAME } from './constants';
import { Collab } from './types';

const collabsSlice = createSlice({
  name: COLLABS_SLICE_NAME,
  initialState: COLLABS_INITIAL_STATE,
  reducers: {},
  extraReducers: {
    [getPreviewCollabs.fulfilled.type]: (
      state,
      action: PayloadAction<Collab[]>,
    ) => {
      state.isFetching = false;
      state.errors = null;
      state.collabs = action.payload;
    },

    [getPreviewCollabs.pending.type]: (state) => {
      state.isFetching = true;
    },

    [getPreviewCollabs.rejected.type]: (
      state,
      action: PayloadAction<string>,
    ) => {
      state.isFetching = false;
      state.errors = action.payload;
    },

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

export default collabsSlice;
