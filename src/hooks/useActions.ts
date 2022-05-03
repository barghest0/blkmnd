import { bindActionCreators } from '@reduxjs/toolkit';
import useTypedDispatch from './redux/useTypedSelector';
import * as beatsActions from '../redux/beats/actions';
import * as beatActions from '../redux/beat/actions';
import * as licensesActions from '../redux/licenses/actions';
import * as soundKitsActions from '../redux/soundKits/actions';
import * as collabsActions from '../redux/collabs/actions';

const rootActionCreator = {
  ...beatsActions,
  ...beatActions,
  ...licensesActions,
  ...soundKitsActions,
  ...collabsActions,
};

const useActions = () => {
  const dispatch = useTypedDispatch();
  return bindActionCreators(rootActionCreator, dispatch);
};

export default useActions;
