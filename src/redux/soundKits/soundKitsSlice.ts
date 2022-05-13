import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getAllSoundKits, getPreviewSoundKits, getSoundKit } from './actions';
import { SOUND_KITS_INITIAL_STATE, SOUND_KITS_SLICE_NAME } from './constants';
import { SoundKit } from './types';

const soundKitsSlice = createSlice({
  name: SOUND_KITS_SLICE_NAME,
  initialState: SOUND_KITS_INITIAL_STATE,
  reducers: {},
  extraReducers: {
    [getPreviewSoundKits.fulfilled.type]: (
      state,
      action: PayloadAction<SoundKit[]>,
    ) => {
      state.isFetching = false;
      state.soundKits = action.payload;
      state.error = '';
    },

    [getPreviewSoundKits.pending.type]: state => {
      state.isFetching = true;
    },

    [getPreviewSoundKits.rejected.type]: (
      state,
      action: PayloadAction<string>,
    ) => {
      state.isFetching = false;
      state.error = action.payload;
    },

    [getAllSoundKits.fulfilled.type]: (
      state,
      action: PayloadAction<SoundKit[]>,
    ) => {
      state.isFetching = false;
      state.soundKits = action.payload;
      state.error = '';
    },

    [getAllSoundKits.pending.type]: state => {
      state.isFetching = true;
    },

    [getAllSoundKits.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isFetching = false;
      state.error = action.payload;
    },

    [getSoundKit.fulfilled.type]: (state, action: PayloadAction<SoundKit>) => {
      state.soundKit = action.payload;
      state.error = '';
    },

    [getSoundKit.rejected.type]: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
  },
});

export default soundKitsSlice;
