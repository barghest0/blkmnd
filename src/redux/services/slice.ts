import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Service } from 'redux/service-details/types';

import { getAllServices } from './actions';
import { SERVICES_INITIAL_STATE, SERVICES_SLICE_NAME } from './constants';

const services = createSlice({
  name: SERVICES_SLICE_NAME,
  initialState: SERVICES_INITIAL_STATE,
  reducers: {},
  extraReducers: {
    [getAllServices.fulfilled.type]: (
      state,
      action: PayloadAction<Service[]>,
    ) => {
      state.isFetching = false;
      state.errors = null;
      state.services = action.payload;
    },

    [getAllServices.pending.type]: (state) => {
      state.isFetching = true;
    },

    [getAllServices.rejected.type]: (state, action: PayloadAction<any>) => {
      state.isFetching = false;
      state.errors = action.payload;
    },
  },
});

export default services;
