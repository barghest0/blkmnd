import { bindActionCreators } from '@reduxjs/toolkit';

import landingSlice from '../redux/landing/landingSlice';
import useTypedDispatch from './redux/useTypedSelector';

const landingActions = landingSlice.actions;

const rootActionCreator = {
  ...landingActions,
};

const useActions = () => {
  const dispatch = useTypedDispatch();
  return bindActionCreators(rootActionCreator, dispatch);
};

export default useActions;
