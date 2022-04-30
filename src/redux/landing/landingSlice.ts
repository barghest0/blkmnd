import { createSlice } from '@reduxjs/toolkit';
import { LANDING_INITIAL_STATE, LANDING_SLICE_NAME } from './constants';

const landingSlice = createSlice({
  name: LANDING_SLICE_NAME,
  initialState: LANDING_INITIAL_STATE,
  reducers: {
    getPreviewTrack: state => {
      state.previewBit = 'something';
    },
  },
});

export default landingSlice;
