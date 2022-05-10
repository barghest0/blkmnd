import { Beat } from '../beat/types';
import { License } from '../beat/types';

enum ModalsTypes {
  share = 'isShareOpen',
  download = 'isDownloadOpen',
  buy = 'isBuyOpen',
  license = 'isLicenseOpen',
  privacyPolicy = 'isPrivacyPolicyOpen',
  terms = 'isTermsOpen',
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
  beat: Beat | null;
  license: License | null;
  privacyPolicy: string;
  terms: string;
  error:string
};

export { ModalsState, ModalsTypes, SetVisabilityPayload };
