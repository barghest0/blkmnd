import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Beat } from '../beat/types';
import { getDiscographyBeats } from './actions';
import { DISCOGRAPHY_INITIAL_STATE, DISCORGAPHY_SLICE_NAME } from './constants';

const discographySlice = createSlice({
  name: DISCORGAPHY_SLICE_NAME,
  initialState: DISCOGRAPHY_INITIAL_STATE,
  reducers: {},
  extraReducers: {
    [getDiscographyBeats.fulfilled.type]: (
      state,
      action: PayloadAction<Beat[]>,
    ) => {
      state.isFetching = false;
      state.error = '';
      state.beats = action.payload;
    },

    [getDiscographyBeats.pending.type]: state => {
      state.isFetching = true;
    },

    [getDiscographyBeats.rejected.type]: (
      state,
      action: PayloadAction<string>,
    ) => {
      state.isFetching = false;
      state.error = action.payload;
    },
  },
});

export default discographySlice;