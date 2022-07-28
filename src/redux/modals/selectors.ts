import { State } from 'reduxStore/types';

const modalsVisabilities = ({
  modals: {
    isBuyOpen,
    isShareOpen,
    isDownloadOpen,
    isTermsOpen,
    isPrivacyPolicyOpen,
    isLicenseOpen,
    isAuthOpen,
  },
}: State) => ({
  buyModalVisability: isBuyOpen,
  shareModalVisability: isShareOpen,
  downloadModalVisability: isDownloadOpen,
  termsModalVisability: isTermsOpen,
  privacyPolicyModalVisability: isPrivacyPolicyOpen,
  licenseModalVisability: isLicenseOpen,
  authModalVisability: isAuthOpen,
});

const modalDetails = ({
  modals: { beat, license, privacyPolicy, term },
}: State) => ({
  modalBeat: beat,
  modalLicense: license,
  modalPrivacyPolicy: privacyPolicy,
  modalTerm: term,
});

const modalsErrors = ({ modals: { errors } }: State) => errors;

export { modalsVisabilities, modalDetails, modalsErrors };
