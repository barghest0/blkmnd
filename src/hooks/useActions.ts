import { bindActionCreators } from '@reduxjs/toolkit';
import beatSlice from '../redux/beat/beatSlice';

import beatsSlice from '../redux/beats/beatsSlice';
import useTypedDispatch from './redux/useTypedSelector';


const beatsActions = beatsSlice.actions;
const beatSliceActions = beatSlice.actions;

const rootActionCreator = {
  ...beatsActions,
  ...beatSliceActions
};

const useActions = () => {
  const dispatch = useTypedDispatch();
  return bindActionCreators(rootActionCreator, dispatch);
};

export default useActions;
