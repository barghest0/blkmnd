import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getPreviewCollabs } from './actions';
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
      state.error = '';
      state.collabs = action.payload;
    },

    [getPreviewCollabs.pending.type]: state => {
      state.isFetching = true;
    },

    [getPreviewCollabs.rejected.type]: (
      state,
      action: PayloadAction<string>,
    ) => {
      state.isFetching = false;
      state.error = action.payload;
    },
  },
});

export { collabsSlice };
