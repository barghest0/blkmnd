import { State } from '../types';

const visabilities = (state: State) => ({
  buy: state.modals.isBuyOpen,
  share: state.modals.isShareOpen,
  download: state.modals.isDownloadOpen,
  terms: state.modals.isTermsOpen,
  privacyPolicy: state.modals.isPrivacyPolicyOpen,
  auth: state.modals.isAuthOpen,
});

const details = (state: State) => ({
  beat: state.modals.beat,
  license: state.modals.license,
  privacyPolicy: state.modals.privacyPolicy,
  term: state.modals.term,
});

const errors = (state: State) => state.modals.errors;

export { visabilities, details, errors };
