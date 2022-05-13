import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Beat } from './types';
import {
  getAllBeats,
  getPreviewBeats,
  getFeaturedBeat,
  getFilteredBeats,
  getBeat,
} from './actions';
import { BEATS_INITIAL_STATE, BEATS_SLICE_NAME } from './constants';

const beatsSlice = createSlice({
  name: BEATS_SLICE_NAME,
  initialState: BEATS_INITIAL_STATE,
  reducers: {},
  extraReducers: {
    [getPreviewBeats.fulfilled.type]: (
      state,
      action: PayloadAction<Beat[]>,
    ) => {
      state.isFetching = false;
      state.error = '';
      state.beats = action.payload;
    },

    [getPreviewBeats.pending.type]: state => {
      state.isFetching = true;
    },

    [getPreviewBeats.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isFetching = false;
      state.error = action.payload;
    },

    [getAllBeats.fulfilled.type]: (state, action: PayloadAction<Beat[]>) => {
      state.isFetching = false;
      state.error = '';
      state.beats = action.payload;
    },

    [getAllBeats.pending.type]: state => {
      state.isFetching = true;
    },

    [getAllBeats.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isFetching = false;
      state.error = action.payload;
    },

    [getFilteredBeats.fulfilled.type]: (
      state,
      action: PayloadAction<Beat[]>,
    ) => {
      state.isFetching = false;
      state.error = '';
      state.beats = action.payload;
    },

    [getFilteredBeats.pending.type]: state => {
      state.isFetching = true;
    },

    [getFilteredBeats.rejected.type]: (
      state,
      action: PayloadAction<string>,
    ) => {
      state.isFetching = false;
      state.error = action.payload;
    },

    [getFeaturedBeat.fulfilled.type]: (
      state,
      action: PayloadAction<Beat[]>,
    ) => {
      state.error = '';
      const featuredBeat =
        action.payload[Math.floor(Math.random() * action.payload.length)];
      state.beat = featuredBeat;
    },

    [getFeaturedBeat.rejected.type]: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },

    [getBeat.fulfilled.type]: (state, action: PayloadAction<Beat>) => {
      state.error = '';
      state.beat = action.payload;
    },

    [getBeat.rejected.type]: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
  },
});

export default beatsSlice;
