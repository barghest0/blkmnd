import { SoundKitDetailsState } from './types';

const SOUND_KIT_DETAILS_SLICE_NAME = 'sound-kit-details';

const GET_SOUND_KIT_NAME = 'sound-kits/single';

const UPDATE_SOUND_KIT_NAME = ' sound-kit/update';

const SOUND_KIT_DETAILS_INITIAL_STATE: SoundKitDetailsState = {
  soundKit: null,
  isFetching: false,
  errors: null,
};

export {
  SOUND_KIT_DETAILS_INITIAL_STATE,
  SOUND_KIT_DETAILS_SLICE_NAME,
  UPDATE_SOUND_KIT_NAME,
  GET_SOUND_KIT_NAME,
};
