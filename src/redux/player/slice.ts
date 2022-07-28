import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Beat } from 'reduxStore/beats/types';

import { getQueueBeats } from './actions';
import { PLAYER_SLICE_NAME, PLAYER_INITIAL_STATE } from './constants';

const player = createSlice({
  name: PLAYER_SLICE_NAME,
  initialState: PLAYER_INITIAL_STATE,
  reducers: {
    togglePlaying: (state, action: PayloadAction<Beat | null>) => {
      const previousBeat = action.payload;
      const { currentBeat, isPlaying } = state;

      if (previousBeat) {
        if (currentBeat?.id === previousBeat.id) {
          state.isPlaying = !state.isPlaying;
        }
        if (!isPlaying && previousBeat.id !== currentBeat?.id) {
          state.isPlaying = !state.isPlaying;
        }
      } else {
        state.isPlaying = !state.isPlaying;
      }
    },

    openPlayer: (state) => {
      if (!state.isPlaying && !state.isOpen) {
        state.isOpen = true;
      }
    },

    setBeat: (state, action: PayloadAction<Beat>) => {
      state.currentBeat = action.payload;
      const firstBeat = state.queue[0];

      const currentBeatIndex = state.queue.findIndex(
        (beat) => beat.id === state.currentBeat?.id,
      );
      const randomIndex = Math.round(Math.random() * (state.queue.length - 1));
      const nextBeatIndex = state.isShuffle
        ? randomIndex
        : currentBeatIndex + 1;

      const previousBeatIndex = state.isShuffle
        ? randomIndex
        : currentBeatIndex - 1;

      const nextBeat = state.queue[nextBeatIndex];
      const previousBeat = state.queue[previousBeatIndex];

      if (nextBeat) {
        state.nextBeat = nextBeat;
      } else {
        state.nextBeat = firstBeat;
      }

      if (previousBeat) {
        state.previousBeat = previousBeat;
      }
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

    toggleIsLoop: (state) => {
      state.isLoop = !state.isLoop;
    },

    toggleIsShuffle: (state) => {
      state.isShuffle = !state.isShuffle;
    },
  },

  extraReducers: {
    [getQueueBeats.fulfilled.type]: (state, action: PayloadAction<Beat[]>) => {
      state.isFetching = false;
      state.errors = null;
      state.queue = action.payload;
    },

    [getQueueBeats.pending.type]: (state) => {
      state.isFetching = true;
    },

    [getQueueBeats.rejected.type]: (state, action: PayloadAction<any>) => {
      state.isFetching = false;
      state.errors = action.payload;
    },
  },
});

export default player;
