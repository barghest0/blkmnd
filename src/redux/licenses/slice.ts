import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { License } from 'reduxStore/beats/types';

import { getLicense, getLicenses } from './actions';
import { LICENSE_INITIAL_STATE, LICENSE_SLICE_NAME } from './constants';

const licenses = createSlice({
  name: LICENSE_SLICE_NAME,
  initialState: LICENSE_INITIAL_STATE,
  reducers: {},
  extraReducers: {
    

    [getLicense.fulfilled.type]: (state, action: PayloadAction<License>) => {
      state.errors = null;
      state.isFetching = false;
      state.license = action.payload;
    },

    [getLicense.pending.type]: (state) => {
      state.isFetching = true;
    },

    [getLicense.rejected.type]: (state, action: PayloadAction<any>) => {
      state.errors = action.payload;
      state.isFetching = false;
    },
  },
});

export default licenses;
