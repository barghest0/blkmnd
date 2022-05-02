import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Beat } from '../beat/types';
import { MODAL_INITIAL_STATE, MODAL_SLICE_NAME } from './constants';

const modalSlice = createSlice({
  name: MODAL_SLICE_NAME,
  initialState: MODAL_INITIAL_STATE,
  reducers: {},
});

export { modalSlice };
