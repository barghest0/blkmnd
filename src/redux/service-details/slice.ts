import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { getService } from './actions';
import {
  SERVICE_DETAILS_INITIAL_STATE,
  SERVICE_DETAILS_SLICE_NAME,
} from './constants';
import { Service } from './types';

const serviceDetails = createSlice({
  name: SERVICE_DETAILS_SLICE_NAME,
  initialState: SERVICE_DETAILS_INITIAL_STATE,
  reducers: {},
  extraReducers: {
    [getService.fulfilled.type]: (state, action: PayloadAction<Service>) => {
      state.isFetching = false;
      state.errors = null;
      state.service = action.payload;
    },

    [getService.pending.type]: (state) => {
      state.isFetching = true;
    },

    [getService.rejected.type]: (state, action: PayloadAction<any>) => {
      state.isFetching = false;
      state.errors = action.payload;
    },
  },
});

export default serviceDetails;
