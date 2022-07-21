import { bindActionCreators } from '@reduxjs/toolkit';

import useTypedDispatch from 'hooks/redux/useTypedSelector';

import playerSlice from 'reduxStore/player/slice';
import modalsSlice from 'reduxStore/modals/slice';
import beatsSlice from 'reduxStore/beats/slice';
import soundKitsSlice from 'reduxStore/sound-kits/slice';
import authSlice from 'reduxStore/auth/slice';
import beatDetailsSlice from 'reduxStore/beat-details/slice';
import * as beatsActions from 'reduxStore/beats/actions';
import * as asyncBeatDetailsActions from 'reduxStore/beat-details/actions';
import * as licensesActions from 'reduxStore/licenses/actions';
import * as soundKitsActions from 'reduxStore/sound-kits/actions';
import * as collabsActions from 'reduxStore/collabs/actions';
import * as discographyActions from 'reduxStore/discography/actions';
import * as membershipsActions from 'reduxStore/memberships/actions';
import * as playerActions from 'reduxStore/player/actions';
import * as cartActions from 'reduxStore/cart/actions';
import * as authActions from 'reduxStore/auth/actions';
import * as userActions from 'reduxStore/user/actions';
import * as landingActions from 'reduxStore/landing/actions';

const rootActionCreator = {
  ...beatsActions,
  ...asyncBeatDetailsActions,
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
  ...playerActions,
  ...beatDetailsSlice.actions,
  ...authActions,
  ...userActions,
  ...landingActions,
};

const useActions = () => {
  const dispatch = useTypedDispatch();
  return bindActionCreators(rootActionCreator, dispatch);
};

export default useActions;
