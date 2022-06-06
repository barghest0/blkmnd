import { createSlice, PayloadAction } from '@reduxjs/toolkit';

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
});

export default modalsSlice;
