import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Beat } from '../beat/types';
import { PLAYER_SLICE_NAME, PLAYER_INITIAL_STATE } from './constants';

const playerSlice = createSlice({
  name: PLAYER_SLICE_NAME,
  initialState: PLAYER_INITIAL_STATE,
  reducers: {
    togglePlaying: state => {
      state.isPlaying = !state.isPlaying;
    },
    openPlayer: state => {
      state.isOpen = true;
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
});

export { playerSlice };
