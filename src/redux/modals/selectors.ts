import { State } from '../types';

const visabilities = (state: State) => ({
  buyModalVisability: state.modals.isBuyOpen,
  shareModalVisability: state.modals.isShareOpen,
  downloadModalVisability: state.modals.isDownloadOpen,
  termsModalVisability: state.modals.isTermsOpen,
  privacyPolicyModalVisability: state.modals.isPrivacyPolicyOpen,
  licenseModalVisability: state.modals.isLicenseOpen,
  authModalVisability: state.modals.isAuthOpen,
});

const details = (state: State) => ({
  modalBeat: state.modals.beat,
  modalLicense: state.modals.license,
  modalPrivacyPolicy: state.modals.privacyPolicy,
  modalTerm: state.modals.term,
});

const errors = (state: State) => state.modals.errors;

export { visabilities, details, errors };
