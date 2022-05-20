import { combineReducers, configureStore } from '@reduxjs/toolkit';
import beatsSlice from './beats/beatsSlice';
import cartSlice from './cart/cartSlice';
import collabsSlice from './collabs/collabsSlice';
import discographySlice from './discography/discographySlice';
import licensesSlice from './licenses/licensesSlice';
import membershipsSlice from './memberships/membershipsSlice';
import modalsSlice from './modals/modalsSlice';
import playerSlice from './player/playerSlice';
import soundKitsSlice from './soundKits/soundKitsSlice';

const rootReducer = combineReducers({
  beats: beatsSlice.reducer,
  licenses: licensesSlice.reducer,
  soundKits: soundKitsSlice.reducer,
  collabs: collabsSlice.reducer,
  player: playerSlice.reducer,
  discography: discographySlice.reducer,
  memberships: membershipsSlice.reducer,
  modals: modalsSlice.reducer,
  cart: cartSlice.reducer,
});

const store = () => configureStore({ reducer: rootReducer });

export { rootReducer };
export default store;
