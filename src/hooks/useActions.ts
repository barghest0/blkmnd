import { bindActionCreators } from '@reduxjs/toolkit';

import useTypedDispatch from 'hooks/redux/useTypedSelector';

import playerSlice from 'reduxStore/player/playerSlice';
import modalsSlice from 'reduxStore/modals/modalsSlice';
import beatsSlice from 'reduxStore/beats/beatsSlice';
import soundKitsSlice from 'reduxStore/soundKits/soundKitsSlice';
import authSlice from 'reduxStore/auth/authSlice';

import * as beatsActions from 'reduxStore/beats/actions';
import * as licensesActions from 'reduxStore/licenses/actions';
import * as soundKitsActions from 'reduxStore/soundKits/actions';
import * as collabsActions from 'reduxStore/collabs/actions';
import * as discographyActions from 'reduxStore/discography/actions';
import * as membershipsActions from 'reduxStore/memberships/actions';
import * as asyncPlayerActions from 'reduxStore/player/actions';
import * as cartActions from 'reduxStore/cart/actions';
import * as authActions from 'reduxStore/auth/actions';
import * as userActions from 'reduxStore/user/actions';

const rootActionCreator = {
  ...beatsActions,
  ...licensesActions,
  ...soundKitsActions,
  ...collabsActions,
  ...cartActions,
  ...discographyActions,
  ...membershipsActions,
  ...beatsSlice.actions,
  ...playerSlice.actions,
  ...soundKitsSlice.actions,
  ...modalsSlice.actions,
  ...authSlice.actions,
  ...asyncPlayerActions,
  ...authActions,
  ...userActions,
};

const useActions = () => {
  const dispatch = useTypedDispatch();
  return bindActionCreators(rootActionCreator, dispatch);
};

export default useActions;
