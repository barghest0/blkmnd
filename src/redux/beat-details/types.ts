import { Beat } from 'redux/beats/types';

type BeatDetailsState = {
  beat: Beat | null;
  isBeatFetching: boolean;
  errors: any | null;
};

export { BeatDetailsState };
