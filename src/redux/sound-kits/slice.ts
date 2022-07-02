import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Comment } from 'reduxStore/beats/types';

import {
  getAllSoundKits,
  getPreviewSoundKits,
  getSoundKit,
  updateSoundKit,
} from './actions';
import { SOUND_KITS_INITIAL_STATE, SOUND_KITS_SLICE_NAME } from './constants';
import { SoundKit } from './types';

const soundKits = createSlice({
  name: SOUND_KITS_SLICE_NAME,
  initialState: SOUND_KITS_INITIAL_STATE,
  reducers: {
    pushNewSoundKitComment: (state, action: PayloadAction<Comment>) => {
      if (state.soundKit) {
        state.soundKit.comments.push(action.payload);
      }
    },
  },
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

    [getSoundKit.fulfilled.type]: (state, action: PayloadAction<SoundKit>) => {
      state.soundKit = action.payload;
      state.errors = null;
    },

    [getSoundKit.pending.type]: (state) => {
      state.isFetching = true;
    },

    [getSoundKit.rejected.type]: (state, action: PayloadAction<any>) => {
      state.errors = action.payload;
    },

    [updateSoundKit.fulfilled.type]: (
      state,
      action: PayloadAction<SoundKit>,
    ) => {
      state.soundKit = action.payload;
      state.errors = null;
    },

    [updateSoundKit.pending.type]: (state) => {
      state.isFetching = true;
    },

    [updateSoundKit.rejected.type]: (state, action: PayloadAction<any>) => {
      state.errors = action.payload;
    },
  },
});

export default soundKits;
