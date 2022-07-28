import { State } from 'redux/types';

const landingFetchings = ({
  landing: {
    isPreviewBeatsFetching,
    isFeaturedBeatFetching,
    isPreviewServicesFetching,
    isPreviewSoundKitsFetching,
    isLicensesFetching,
  },
}: State) => ({
  isPreviewBeatsFetching,
  isFeaturedBeatFetching,
  isPreviewSoundKitsFetching,
  isPreviewServicesFetching,
  isLicensesFetching,
});

const beats = ({ landing: { featuredBeat, previewBeats } }: State) => ({
  featuredBeat,
  previewBeats,
});

const soundKits = ({ landing: { previewSoundKits } }: State) =>
  previewSoundKits;

const services = ({ landing: { previewServices } }: State) => previewServices;

const licenses = ({ landing: { licenses: previewLicenses } }: State) =>
  previewLicenses;

const errors = ({
  landing: {
    previewBeatsErrors,
    featuredBeatErrors,
    previewServicesErrors,
    previewSoundKitsErrors,
    licensesErrors,
  },
}: State) => ({
  previewBeatsErrors,
  featuredBeatErrors,
  previewServicesErrors,
  previewSoundKitsErrors,
  licensesErrors,
});

export { landingFetchings, beats, soundKits, services, licenses, errors };
