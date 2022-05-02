import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { License } from '../beat/types';
import { getLicenses } from './actions';
import { LICENSE_INITIAL_STATE, LICENSE_SLICE_NAME } from './constants';

const licensesSlice = createSlice({
  name: LICENSE_SLICE_NAME,
  initialState: LICENSE_INITIAL_STATE,
  reducers: {},
  extraReducers: {
    [getLicenses.fulfilled.type]: (state, action: PayloadAction<License[]>) => {
      state.isFetching = false;
      state.error = '';
      state.licenses = action.payload;
    },

    [getLicenses.pending.type]: state => {
      state.isFetching = true;
    },

    [getLicenses.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isFetching = false;
      state.error = action.payload;
    },
  },
});

export default licensesSlice;
