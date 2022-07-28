import { LandingState } from './types';

const LANDING_SLICE_NAME = 'beat/slice';

const LANDING_INITIAL_STATE: LandingState = {
  featuredBeat: null,
  previewBeats: [],
  previewSoundKits: [],
  previewServices: [],
  licenses: [],
  isFeaturedBeatFetching: false,
  isLicensesFetching: false,
  isPreviewSoundKitsFetching: false,
  isPreviewServicesFetching: false,
  isPreviewBeatsFetching: false,
  featuredBeatErrors: null,
  previewBeatsErrors: null,
  previewSoundKitsErrors: null,
  previewServicesErrors: null,
  licensesErrors: null,
};

const GET_FEATURED_BEAT_NAME = 'beats/featured';
const GET_PREVIEW_BEATS_NAME = 'beats/preview';

const GET_LICENSES_NAME = 'licenses/all';

const GET_PREVIEW_SOUND_KITS_NAME = 'soundKits/preview';

const GET_PREVIEW_COLLABS_NAME = 'collabs/preview';

export {
  LANDING_INITIAL_STATE,
  LANDING_SLICE_NAME,
  GET_FEATURED_BEAT_NAME,
  GET_PREVIEW_BEATS_NAME,
  GET_LICENSES_NAME,
  GET_PREVIEW_SOUND_KITS_NAME,
  GET_PREVIEW_COLLABS_NAME,
};
