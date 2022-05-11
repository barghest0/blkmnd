import { Beat } from '../beat/types';

type BeatsState = {
  beats: Beat[];
  isFetching: boolean;
  error: string;
};

export { BeatsState };
