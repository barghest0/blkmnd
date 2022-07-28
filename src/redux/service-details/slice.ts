import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { getServiceDetails } from './actions';
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
    [getServiceDetails.fulfilled.type]: (
      state,
      action: PayloadAction<Service>,
    ) => {
      state.isFetching = false;
      state.errors = null;
      state.service = action.payload;
    },

    [getServiceDetails.pending.type]: (state) => {
      state.isFetching = true;
    },

    [getServiceDetails.rejected.type]: (state, action: PayloadAction<any>) => {
      state.isFetching = false;
      state.errors = action.payload;
    },
  },
});

export default serviceDetails;
