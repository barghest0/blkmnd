import { Beat } from '../beats/types';

type License = {
  name: string;
  price: number;
};

type LandingState = {
  previewBeat: Beat | null;
  isFetching: boolean;
  error: string;
};

export { License, LandingState };
