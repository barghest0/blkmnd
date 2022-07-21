import { combineReducers, configureStore } from '@reduxjs/toolkit';

import authSlice from './auth/slice';
import beatDetails from './beat-details/slice';
import beatsSlice from './beats/slice';
import cartSlice from './cart/slice';
import collabsSlice from './collabs/slice';
import discographySlice from './discography/slice';
import landingSlice from './landing/slice';
import licensesSlice from './licenses/slice';
import membershipsSlice from './memberships/slice';
import modalsSlice from './modals/slice';
import playerSlice from './player/slice';
import soundKitsSlice from './sound-kits/slice';
import soundKitDetailsSlice from './sound-kit-details/slice';
import userSlice from './user/slice';

const rootReducer = combineReducers({
  beats: beatsSlice.reducer,
  beatDetails: beatDetails.reducer,
  licenses: licensesSlice.reducer,
  soundKits: soundKitsSlice.reducer,
  soundKitDetails: soundKitDetailsSlice.reducer,
  collabs: collabsSlice.reducer,
  player: playerSlice.reducer,
  discography: discographySlice.reducer,
  memberships: membershipsSlice.reducer,
  modals: modalsSlice.reducer,
  user: userSlice.reducer,
  auth: authSlice.reducer,
  cart: cartSlice.reducer,
  landing: landingSlice.reducer,
});

const store = () =>
  configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
      }),
  });

export { rootReducer };
export default store;
