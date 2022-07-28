import { ModalsState } from './types';

const MODALS_SLICE_NAME = 'modals';

const GET_MODALS_BEAT_NAME = 'modals/beat';

const GET_MODALS_LICENSE_NAME = 'modals/license';

const MODALS_INITIAL_STATE: ModalsState = {
  isBuyOpen: false,
  isShareOpen: false,
  isDownloadOpen: false,
  isTermsOpen: false,
  isLicenseOpen: false,
  isPrivacyPolicyOpen: false,
  isAuthOpen: false,
  isFetching: false,
  beat: null,
  license: null,
  term: '',
  privacyPolicy: '',
  errors: '',
};

export {
  MODALS_INITIAL_STATE,
  MODALS_SLICE_NAME,
  GET_MODALS_BEAT_NAME,
  GET_MODALS_LICENSE_NAME,
};
