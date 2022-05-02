import { combineReducers, configureStore } from '@reduxjs/toolkit';
import beatSlice from './beat/beatSlice';
import beatsSlice from './beats/beatsSlice';
import licensesSlice from './licenses/licensesSlice';
import soundKitsSlice from './soundKits/soundKitsSlice';

const rootReducer = combineReducers({
  beats: beatsSlice.reducer,
  beat: beatSlice.reducer,
  licenses: licensesSlice.reducer,
  soundKits: soundKitsSlice.reducer,
});

const store = () => configureStore({ reducer: rootReducer });

export { rootReducer };
export default store;
