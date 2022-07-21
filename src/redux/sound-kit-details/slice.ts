import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Comment } from 'reduxStore/beat-details/types';

import { getSoundKit, updateSoundKit } from './actions';
import {
  SOUND_KIT_DETAILS_INITIAL_STATE,
  SOUND_KIT_DETAILS_SLICE_NAME,
} from './constants';
import { SoundKit } from './types';

const soundKits = createSlice({
  name: SOUND_KIT_DETAILS_SLICE_NAME,
  initialState: SOUND_KIT_DETAILS_INITIAL_STATE,
  reducers: {
    pushNewSoundKitComment: (state, action: PayloadAction<Comment>) => {
      if (state.soundKit) {
        state.soundKit.comments.push(action.payload);
      }
    },
  },
  extraReducers: {
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
