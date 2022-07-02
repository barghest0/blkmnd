import { Beat, License } from 'redux/beats/types';
import { Collab } from 'redux/collabs/types';
import { SoundKit } from 'redux/sound-kits/types';

type LandingState = {
  featuredBeat: Beat | null;
  previewBeats: Beat[];
  licenses: License[];
  previewSoundKits: SoundKit[];
  previewServices: Collab[];
  isFeaturedBeatFetching: boolean;
  isPreviewBeatsFetching: boolean;
  isLicensesFetching: boolean;
  isPreviewSoundKitsFetching: boolean;
  isPreviewServicesFetching: boolean;
  featuredBeatErrors: any | null;
  previewBeatsErrors: any | null;
  licensesErrors: any | null;
  previewServicesErrors: any | null;
  previewSoundKitsErrors: any | null;
};

export { LandingState };
