import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { License } from '../beats/types';
import { getLicense, getLicenses } from './actions';
import { LICENSE_INITIAL_STATE, LICENSE_SLICE_NAME } from './constants';

const licensesSlice = createSlice({
  name: LICENSE_SLICE_NAME,
  initialState: LICENSE_INITIAL_STATE,
  reducers: {},
  extraReducers: {
    [getLicenses.fulfilled.type]: (state, action: PayloadAction<License[]>) => {
      state.isFetching = false;
      state.errors = '';
      state.licenses = action.payload;
    },

    [getLicenses.pending.type]: (state) => {
      state.isFetching = true;
    },

    [getLicenses.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isFetching = false;
      state.errors = action.payload;
    },

    [getLicense.fulfilled.type]: (state, action: PayloadAction<License>) => {
      state.errors = '';
      state.license = action.payload;
    },

    [getLicense.rejected.type]: (state, action: PayloadAction<string>) => {
      state.errors = action.payload;
    },
  },
});

export default licensesSlice;
