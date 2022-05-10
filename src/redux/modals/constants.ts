import { ModalsState } from './types';

const MODALS_SLICE_NAME = 'modals';

const MODALS_INITIAL_STATE: ModalsState = {
  isBuyOpen: false,
  isShareOpen: false,
  isDownloadOpen: false,
  isTermsOpen: false,
  isLicenseOpen: false,
  isPrivacyPolicyOpen: false,
  beat: null,
  license: null,
  terms: '',
  privacyPolicy: '',
};

export { MODALS_INITIAL_STATE, MODALS_SLICE_NAME };
