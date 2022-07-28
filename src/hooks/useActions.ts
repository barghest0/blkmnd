import { bindActionCreators } from '@reduxjs/toolkit';

import useTypedDispatch from 'hooks/redux/useTypedSelector';

import playerSlice from 'reduxStore/player/slice';
import modalsSlice from 'reduxStore/modals/slice';
import beatsSlice from 'reduxStore/beats/slice';
import soundKitsSlice from 'reduxStore/sound-kits/slice';
import authSlice from 'reduxStore/auth/slice';
import beatDetailsSlice from 'reduxStore/beat-details/slice';
import soundKitsDetailsSlice from 'reduxStore/sound-kit-details/slice';
import * as soundKitDetailsActions from 'reduxStore/sound-kit-details/actions';
import * as beatsActions from 'reduxStore/beats/actions';
import * as modalsActions from 'reduxStore/modals/actions';
import * as beatDetailsActions from 'reduxStore/beat-details/actions';
import * as licensesActions from 'reduxStore/licenses/actions';
import * as soundKitsActions from 'reduxStore/sound-kits/actions';
import * as servicesActions from 'reduxStore/services/actions';
import * as serviceDetailsActions from 'reduxStore/service-details/actions';
import * as discographyActions from 'reduxStore/discography/actions';
import * as membershipsActions from 'reduxStore/memberships/actions';
import * as playerActions from 'reduxStore/player/actions';
import * as cartActions from 'reduxStore/cart/actions';
import * as authActions from 'reduxStore/auth/actions';
import * as profileActions from 'reduxStore/profile/actions';
import * as landingActions from 'reduxStore/landing/actions';

const rootActionCreator = {
  ...beatsActions,
  ...beatDetailsActions,
  ...licensesActions,
  ...soundKitsActions,
  ...servicesActions,
  ...cartActions,
  ...discographyActions,
  ...membershipsActions,
  ...beatsSlice.actions,
  ...playerSlice.actions,
  ...serviceDetailsActions,
  ...soundKitsSlice.actions,
  ...soundKitsDetailsSlice.actions,
  ...modalsActions,
  ...soundKitDetailsActions,
  ...modalsSlice.actions,
  ...authSlice.actions,
  ...playerActions,
  ...beatDetailsSlice.actions,
  ...authActions,
  ...profileActions,
  ...landingActions,
};

const useActions = () => {
  const dispatch = useTypedDispatch();
  return bindActionCreators(rootActionCreator, dispatch);
};

export default useActions;
