import { SoundKitsState } from './types';

const SOUND_KITS_SLICE_NAME = 'soundKits';

const GET_PREVIEW_SOUND_KITS_NAME = 'soundKits/preview';

const GET_ALL_SOUND_KITS_NAME = 'soundKits/all';

const GET_SOUND_KIT_NAME = 'soundKits/single';

const UPDATE_SOUND_KIT_NAME = ' soundKit/update';

const SOUND_KITS_INITIAL_STATE: SoundKitsState = {
  soundKits: [],
  soundKit: null,
  isFetching: false,
  errors: null,
};

export {
  SOUND_KITS_INITIAL_STATE,
  SOUND_KITS_SLICE_NAME,
  GET_PREVIEW_SOUND_KITS_NAME,
  GET_ALL_SOUND_KITS_NAME,
  UPDATE_SOUND_KIT_NAME,
  GET_SOUND_KIT_NAME,
};
