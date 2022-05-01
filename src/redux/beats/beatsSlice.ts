import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Beat } from '../beats/types';
import { getPreviewBeat } from './actions';
import { BEATS_INITIAL_STATE, BEATS_SLICE_NAME } from './constants';

const beatsSlice = createSlice({
  name: BEATS_SLICE_NAME,
  initialState: BEATS_INITIAL_STATE,
  reducers: {},
  extraReducers: {
    [getPreviewBeat.fulfilled.type]: (state, action: PayloadAction<Beat>) => {
      state.isFetching = false;
      state.error = '';
      state.previewBeat = action.payload;
    },

    [getPreviewBeat.pending.type]: state => {
      state.isFetching = true;
    },

    [getPreviewBeat.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isFetching = false;
      state.error = action.payload;
    },
  },
});

export default beatsSlice;
