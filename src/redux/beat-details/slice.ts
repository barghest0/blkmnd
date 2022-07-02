import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Beat } from 'redux/beats/types';
import { getBeat, updateBeat } from './actions';
import {
  BEAT_DETAILS_INITIAL_STATE,
  BEAT_DETAILS_SLICE_NAME,
} from './constants';

const beatDetails = createSlice({
  name: BEAT_DETAILS_SLICE_NAME,
  initialState: BEAT_DETAILS_INITIAL_STATE,
  reducers: {},
  extraReducers: {
    [getBeat.fulfilled.type]: (state, action: PayloadAction<Beat>) => {
      state.errors = null;
      state.beat = action.payload;
      state.isBeatFetching = false;
    },

    [getBeat.pending.type]: (state) => {
      state.isBeatFetching = true;
    },

    [getBeat.rejected.type]: (state, action: PayloadAction<any>) => {
      state.errors = action.payload;
      state.isBeatFetching = false;
    },

    [updateBeat.fulfilled.type]: (state, action: PayloadAction<Beat>) => {
      state.errors = null;
      state.beat = action.payload;
    },

    [updateBeat.pending.type]: (state) => {
      state.isBeatFetching = true;
    },

    [updateBeat.rejected.type]: (state, action: PayloadAction<string>) => {
      state.errors = action.payload;
    },
  },
});

export default beatDetails;
