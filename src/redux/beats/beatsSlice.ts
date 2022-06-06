import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Beat, Comment } from './types';
import {
  getAllBeats,
  getPreviewBeats,
  getFeaturedBeat,
  getFilteredBeats,
  getBeat,
  updateBeat,
} from './actions';
import { BEATS_INITIAL_STATE, BEATS_SLICE_NAME } from './constants';

const beatsSlice = createSlice({
  name: BEATS_SLICE_NAME,
  initialState: BEATS_INITIAL_STATE,
  reducers: {
    pushNewBeatComment: (state, action: PayloadAction<Comment>) => {
      if (state.beat) {
        state.beat.comments.push(action.payload);
      }
    },
  },
  extraReducers: {
    [getPreviewBeats.fulfilled.type]: (
      state,
      action: PayloadAction<Beat[]>,
    ) => {
      state.isFetching = false;
      state.errors = '';
      state.beats = action.payload;
    },

    [getPreviewBeats.pending.type]: (state) => {
      state.isFetching = true;
    },

    [getPreviewBeats.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isFetching = false;
      state.errors = action.payload;
    },

    [getAllBeats.fulfilled.type]: (state, action: PayloadAction<Beat[]>) => {
      state.isFetching = false;
      state.errors = '';
      state.beats = action.payload;
    },

    [getAllBeats.pending.type]: (state) => {
      state.isFetching = true;
    },

    [getAllBeats.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isFetching = false;
      state.errors = action.payload;
    },

    [getFilteredBeats.fulfilled.type]: (
      state,
      action: PayloadAction<Beat[]>,
    ) => {
      state.isFetching = false;
      state.errors = '';
      state.beats = action.payload;
    },

    [getFilteredBeats.pending.type]: (state) => {
      state.isFetching = true;
    },

    [getFilteredBeats.rejected.type]: (
      state,
      action: PayloadAction<string>,
    ) => {
      state.isFetching = false;
      state.errors = action.payload;
    },

    [getFeaturedBeat.fulfilled.type]: (
      state,
      action: PayloadAction<Beat[]>,
    ) => {
      state.errors = '';
      const featuredBeat =        action.payload[Math.floor(Math.random() * action.payload.length)];
      state.featuredBeat = featuredBeat;
    },

    [getFeaturedBeat.rejected.type]: (state, action: PayloadAction<string>) => {
      state.errors = action.payload;
    },

    [updateBeat.fulfilled.type]: (state, action: PayloadAction<Beat>) => {
      state.errors = '';
      state.beat = action.payload;
    },

    [updateBeat.rejected.type]: (state, action: PayloadAction<string>) => {
      state.errors = action.payload;
    },

    [getBeat.fulfilled.type]: (state, action: PayloadAction<Beat>) => {
      state.errors = '';
      state.beat = action.payload;
    },

    [getBeat.rejected.type]: (state, action: PayloadAction<string>) => {
      state.errors = action.payload;
    },
  },
});

export default beatsSlice;
