import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Beat, License } from '../beat/types';
import { getModalBeat, getModalLicense } from './actions';
import { MODALS_INITIAL_STATE, MODALS_SLICE_NAME } from './constants';
import { SetVisabilityPayload } from './types';

const modalsSlice = createSlice({
  name: MODALS_SLICE_NAME,
  initialState: MODALS_INITIAL_STATE,
  reducers: {
    setModalVisability: (
      state,
      action: PayloadAction<SetVisabilityPayload>,
    ) => {
      const { visability, modalType } = action.payload;
      state[modalType] = visability;
    },
  },
  extraReducers: {
    [getModalBeat.fulfilled.type]: (state, action: PayloadAction<Beat>) => {
      state.error = '';
      state.beat = action.payload;
    },

    [getModalBeat.rejected.type]: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },

    [getModalLicense.fulfilled.type]: (
      state,
      action: PayloadAction<License>,
    ) => {
      state.error = '';
      state.license = action.payload;
    },

    [getModalLicense.rejected.type]: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
  },
});

export default modalsSlice;
