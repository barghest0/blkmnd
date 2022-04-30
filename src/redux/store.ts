import { combineReducers, configureStore } from '@reduxjs/toolkit';
import landingSlice from './landing/landingSlice';

const rootReducer = combineReducers({
  landing: landingSlice.reducer,
});

const store = () => configureStore({ reducer: rootReducer });

export { rootReducer };
export default store;
