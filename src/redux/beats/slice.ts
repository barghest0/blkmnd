import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Beat } from './types';
import { getAllBeats, getFilteredBeats } from './actions';
import { BEATS_INITIAL_STATE, BEATS_SLICE_NAME } from './constants';

const beats = createSlice({
  name: BEATS_SLICE_NAME,
  initialState: BEATS_INITIAL_STATE,
  reducers: {},
  extraReducers: {
    [getAllBeats.fulfilled.type]: (state, action: PayloadAction<Beat[]>) => {
      state.isFetching = false;
      state.errors = null;
      state.beats = action.payload;
    },

    [getAllBeats.pending.type]: (state) => {
      state.isFetching = true;
    },

    [getAllBeats.rejected.type]: (state, action: PayloadAction<any>) => {
      state.isFetching = false;
      state.errors = action.payload;
    },

    [getFilteredBeats.fulfilled.type]: (
      state,
      action: PayloadAction<Beat[]>,
    ) => {
      state.isFetching = false;
      state.errors = null;
      state.beats = action.payload;
    },

    [getFilteredBeats.pending.type]: (state) => {
      state.isFetching = true;
    },

    [getFilteredBeats.rejected.type]: (state, action: PayloadAction<any>) => {
      state.isFetching = false;
      state.errors = action.payload;
    },
  },
});

export default beats;
