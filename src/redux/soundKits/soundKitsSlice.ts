import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Comment } from '../beats/types';
import {
  getAllSoundKits,
  getPreviewSoundKits,
  getSoundKit,
  updateSoundKit,
} from './actions';
import { SOUND_KITS_INITIAL_STATE, SOUND_KITS_SLICE_NAME } from './constants';
import { SoundKit } from './types';

const soundKitsSlice = createSlice({
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
    [getPreviewSoundKits.fulfilled.type]: (
      state,
      action: PayloadAction<SoundKit[]>,
    ) => {
      state.isFetching = false;
      state.soundKits = action.payload;
      state.errors = '';
    },

    [getPreviewSoundKits.pending.type]: (state) => {
      state.isFetching = true;
    },

    [getPreviewSoundKits.rejected.type]: (
      state,
      action: PayloadAction<string>,
    ) => {
      state.isFetching = false;
      state.errors = action.payload;
    },

    [getAllSoundKits.fulfilled.type]: (
      state,
      action: PayloadAction<SoundKit[]>,
    ) => {
      state.isFetching = false;
      state.soundKits = action.payload;
      state.errors = '';
    },

    [getAllSoundKits.pending.type]: (state) => {
      state.isFetching = true;
    },

    [getAllSoundKits.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isFetching = false;
      state.errors = action.payload;
    },

    [getSoundKit.fulfilled.type]: (state, action: PayloadAction<SoundKit>) => {
      state.soundKit = action.payload;
      state.errors = '';
    },

    [getSoundKit.rejected.type]: (state, action: PayloadAction<string>) => {
      state.errors = action.payload;
    },

    [updateSoundKit.fulfilled.type]: (
      state,
      action: PayloadAction<SoundKit>,
    ) => {
      state.soundKit = action.payload;
      state.errors = '';
    },

    [updateSoundKit.rejected.type]: (state, action: PayloadAction<string>) => {
      state.errors = action.payload;
    },
  },
});

export default soundKitsSlice;
