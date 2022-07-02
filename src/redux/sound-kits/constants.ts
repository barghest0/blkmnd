import { SoundKitsState } from './types';

const SOUND_KITS_SLICE_NAME = 'sound-kits';

const GET_ALL_SOUND_KITS_NAME = 'sound-kits/all';

const GET_SOUND_KIT_NAME = 'sound-kits/single';

const UPDATE_SOUND_KIT_NAME = ' sound-kit/update';

const SOUND_KITS_INITIAL_STATE: SoundKitsState = {
  soundKits: [],
  soundKit: null,
  isFetching: false,
  errors: null,
};

export {
  SOUND_KITS_INITIAL_STATE,
  SOUND_KITS_SLICE_NAME,
  GET_ALL_SOUND_KITS_NAME,
  UPDATE_SOUND_KIT_NAME,
  GET_SOUND_KIT_NAME,
};
