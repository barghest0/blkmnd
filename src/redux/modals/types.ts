import { Beat, License } from 'reduxStore/beats/types';

enum ModalsTypes {
  share = 'isShareOpen',
  download = 'isDownloadOpen',
  buy = 'isBuyOpen',
  license = 'isLicenseOpen',
  privacyPolicy = 'isPrivacyPolicyOpen',
  terms = 'isTermsOpen',
  auth = 'isAuthOpen',
}

type SetVisabilityPayload = {
  visability: boolean;
  modalType: ModalsTypes;
};

type ModalsState = {
  isDownloadOpen: boolean;
  isShareOpen: boolean;
  isLicenseOpen: boolean;
  isBuyOpen: boolean;
  isPrivacyPolicyOpen: boolean;
  isTermsOpen: boolean;
  isAuthOpen: boolean;
  beat: Beat | null;
  license: License | null;
  privacyPolicy: string;
  term: string;
  errors: string;
};

export { ModalsState, ModalsTypes, SetVisabilityPayload };
