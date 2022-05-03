import { SoundKitsState } from './types';

const SOUND_KITS_SLICE_NAME = 'soundKits';

const GET_PREVIEW_SOUND_KITS_NAME = 'soundKits/preview';

const GET_ALL_SOUND_KITS_NAME = 'soundKits/all';

const SOUND_KITS_INITIAL_STATE: SoundKitsState = {
  soundKits: [],
  isFetching: false,
  error: '',
};

export {
  SOUND_KITS_INITIAL_STATE,
  SOUND_KITS_SLICE_NAME,
  GET_PREVIEW_SOUND_KITS_NAME,
  GET_ALL_SOUND_KITS_NAME,
};
