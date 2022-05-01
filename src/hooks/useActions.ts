import { bindActionCreators } from '@reduxjs/toolkit';

import beatsSlice from '../redux/beats/beatsSlice';
import useTypedDispatch from './redux/useTypedSelector';

const landingActions = beatsSlice.actions;

const rootActionCreator = {
  ...landingActions,
};

const useActions = () => {
  const dispatch = useTypedDispatch();
  return bindActionCreators(rootActionCreator, dispatch);
};

export default useActions;
