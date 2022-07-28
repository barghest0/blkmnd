import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { License } from 'redux/beats/types';
import { Beat } from 'redux/beat-details/types';

import { MODALS_INITIAL_STATE, MODALS_SLICE_NAME } from './constants';
import { SetVisabilityPayload } from './types';
import { getModalLicense, getModalBeat } from './actions';

const modals = createSlice({
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
    [getModalLicense.fulfilled.type]: (
      state,
      action: PayloadAction<License>,
    ) => {
      state.license = action.payload;
      state.isFetching = false;
    },

    [getModalLicense.pending.type]: (state) => {
      state.isFetching = true;
    },

    [getModalLicense.pending.type]: (state, action: any) => {
      state.errors = action.payload;
      state.isFetching = false;
    },

    [getModalBeat.fulfilled.type]: (state, action: PayloadAction<Beat>) => {
      state.beat = action.payload;
      state.isFetching = false;
    },

    [getModalBeat.pending.type]: (state) => {
      state.isFetching = true;
    },

    [getModalBeat.pending.type]: (state, action: any) => {
      state.errors = action.payload;
      state.isFetching = false;
    },
  },
});

export default modals;
