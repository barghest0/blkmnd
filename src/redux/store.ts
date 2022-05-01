import { combineReducers, configureStore } from '@reduxjs/toolkit';
import beatsSlice from './beats/beatsSlice';

const rootReducer = combineReducers({
  beats: beatsSlice.reducer,
});

const store = () => configureStore({ reducer: rootReducer });

export { rootReducer };
export default store;
