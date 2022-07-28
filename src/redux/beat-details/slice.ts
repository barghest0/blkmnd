import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getBeatDetails, updateBeatDetails } from './actions';
import {
  BEAT_DETAILS_INITIAL_STATE,
  BEAT_DETAILS_SLICE_NAME,
} from './constants';
import { Beat, Comment } from './types';

const beatDetails = createSlice({
  name: BEAT_DETAILS_SLICE_NAME,
  initialState: BEAT_DETAILS_INITIAL_STATE,
  reducers: {
    pushNewBeatComment: (state, action: PayloadAction<Comment>) => {
      if (state.beat) {
        state.beat.comments.push(action.payload);
      }
    },
  },
  extraReducers: {
    [getBeatDetails.fulfilled.type]: (state, action: PayloadAction<Beat>) => {
      state.errors = null;
      state.beat = action.payload;
      state.isBeatFetching = false;
    },

    [getBeatDetails.pending.type]: (state) => {
      state.isBeatFetching = true;
    },

    [getBeatDetails.rejected.type]: (state, action: PayloadAction<any>) => {
      state.errors = action.payload;
      state.isBeatFetching = false;
    },

    [updateBeatDetails.fulfilled.type]: (
      state,
      action: PayloadAction<Beat>,
    ) => {
      state.errors = null;
      state.beat = action.payload;
    },

    [updateBeatDetails.pending.type]: (state) => {
      state.isBeatFetching = true;
    },

    [updateBeatDetails.rejected.type]: (
      state,
      action: PayloadAction<string>,
    ) => {
      state.errors = action.payload;
    },
  },
});

export default beatDetails;
