import { SoundKitsState } from './types';

const SOUND_KITS_SLICE_NAME = 'sound-kits';

const GET_ALL_SOUND_KITS_NAME = 'sound-kits/all';

const SOUND_KITS_INITIAL_STATE: SoundKitsState = {
  soundKits: [],
  isFetching: false,
  errors: null,
};

export {
  SOUND_KITS_INITIAL_STATE,
  SOUND_KITS_SLICE_NAME,
  GET_ALL_SOUND_KITS_NAME,
};
