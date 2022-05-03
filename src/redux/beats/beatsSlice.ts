import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Beat } from '../beat/types';
import { getAllBeats, getPreviewBeats } from './actions';
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
  },
});

export default beatsSlice;
