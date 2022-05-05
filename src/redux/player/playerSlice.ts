import { createSlice, PayloadAction } from '@reduxjs/toolkit';
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
    setBeat: (state, action: PayloadAction<string>) => {
      state.beat = action.payload;
    },
  },
});

export { playerSlice };
