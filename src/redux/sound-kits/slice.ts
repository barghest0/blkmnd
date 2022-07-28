import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { SoundKit } from 'redux/sound-kit-details/types';

import { getAllSoundKits } from './actions';
import { SOUND_KITS_INITIAL_STATE, SOUND_KITS_SLICE_NAME } from './constants';

const soundKits = createSlice({
  name: SOUND_KITS_SLICE_NAME,
  initialState: SOUND_KITS_INITIAL_STATE,
  reducers: {},
  extraReducers: {
    [getAllSoundKits.fulfilled.type]: (
      state,
      action: PayloadAction<SoundKit[]>,
    ) => {
      state.isFetching = false;
      state.soundKits = action.payload;
      state.errors = null;
    },

    [getAllSoundKits.pending.type]: (state) => {
      state.isFetching = true;
    },

    [getAllSoundKits.rejected.type]: (state, action: PayloadAction<any>) => {
      state.isFetching = false;
      state.errors = action.payload;
    },
  },
});

export default soundKits;
