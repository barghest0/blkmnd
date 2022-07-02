import { State } from 'redux/types';

const fetchings = ({
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

export { fetchings, beats, soundKits, services, licenses, errors };
