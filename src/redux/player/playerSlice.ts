import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Beat } from '../beat/types';
import { getQueueBeats } from './actions';
import { PLAYER_SLICE_NAME, PLAYER_INITIAL_STATE } from './constants';

const playerSlice = createSlice({
  name: PLAYER_SLICE_NAME,
  initialState: PLAYER_INITIAL_STATE,
  reducers: {
    togglePlaying: state => {
      state.isPlaying = !state.isPlaying;
    },

    openPlayer: state => {
      if (!state.isPlaying) {
        state.isOpen = true;
      }
    },

    setBeat: (state, action: PayloadAction<Beat>) => {
      state.beat = action.payload;
    },

    setDuration: (state, action: PayloadAction<number>) => {
      state.duration = action.payload;
    },

    setCurrentTime: (state, action: PayloadAction<number>) => {
      state.currentTime = Math.floor(action.payload);
    },

    setVolume: (state, action: PayloadAction<number>) => {
      state.volume = action.payload;
    },
  },
  extraReducers: {
    [getQueueBeats.fulfilled.type]: (state, action: PayloadAction<Beat[]>) => {
      state.isFetching = false;
      state.error = '';
      state.queue = action.payload;
    },

    [getQueueBeats.pending.type]: state => {
      state.isFetching = true;
    },

    [getQueueBeats.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isFetching = false;
      state.error = action.payload;
    },
  },
});

export default playerSlice;
