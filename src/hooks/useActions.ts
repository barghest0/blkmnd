import { bindActionCreators } from '@reduxjs/toolkit';
import useTypedDispatch from './redux/useTypedSelector';

import playerSlice from '../redux/player/playerSlice';
import modalsSlice from '../redux/modals/modalsSlice';

import * as beatsActions from '../redux/beats/actions';
import * as licensesActions from '../redux/licenses/actions';
import * as soundKitsActions from '../redux/soundKits/actions';
import * as collabsActions from '../redux/collabs/actions';
import * as discographyActions from '../redux/discography/actions';
import * as membershipsActions from '../redux/memberships/actions';
import * as asyncPlayerActions from '../redux/player/actions';
import * as cartActions from '../redux/cart/actions';

const rootActionCreator = {
  ...beatsActions,
  ...licensesActions,
  ...soundKitsActions,
  ...collabsActions,
  ...cartActions,
  ...discographyActions,
  ...membershipsActions,
  ...playerSlice.actions,
  ...modalsSlice.actions,
  ...asyncPlayerActions,
};

const useActions = () => {
  const dispatch = useTypedDispatch();
  return bindActionCreators(rootActionCreator, dispatch);
};

export default useActions;
