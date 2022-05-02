import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getBeat, getFeaturedBeat } from './actions';
import { BEAT_INITIAL_STATE, BEAT_SLICE_NAME } from './constants';
import { Beat } from './types';

const beatSlice = createSlice({
  name: BEAT_SLICE_NAME,
  initialState: BEAT_INITIAL_STATE,
  reducers: {},
  extraReducers: {
    [getFeaturedBeat.fulfilled.type]: (
      state,
      action: PayloadAction<Beat[]>,
    ) => {
      state.error = '';
      const featuredBeat =
        action.payload[Math.floor(Math.random() * action.payload.length)];
      state.featuredBeat = featuredBeat;
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

export default beatSlice;
