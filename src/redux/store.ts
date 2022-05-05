import { combineReducers, configureStore } from '@reduxjs/toolkit';
import beatSlice from './beat/beatSlice';
import beatsSlice from './beats/beatsSlice';
import { collabsSlice } from './collabs/collabsSlice';
import licensesSlice from './licenses/licensesSlice';
import { playerSlice } from './player/playerSlice';
import soundKitsSlice from './soundKits/soundKitsSlice';

const rootReducer = combineReducers({
  beats: beatsSlice.reducer,
  beat: beatSlice.reducer,
  licenses: licensesSlice.reducer,
  soundKits: soundKitsSlice.reducer,
  collabs: collabsSlice.reducer,
  player: playerSlice.reducer,
});

const store = () => configureStore({ reducer: rootReducer });

export { rootReducer };
export default store;
