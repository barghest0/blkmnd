import { SoundKitsState } from './types';

const SOUND_KITS_SLICE_NAME = 'soundKits';

const GET_PREVIEW_SOUND_KITS = 'soundKits/preview';

const SOUND_KITS_INITIAL_STATE: SoundKitsState = {
  soundKits: [],
  isFetching: false,
  error: '',
};

export {
  SOUND_KITS_INITIAL_STATE,
  SOUND_KITS_SLICE_NAME,
  GET_PREVIEW_SOUND_KITS,
};
