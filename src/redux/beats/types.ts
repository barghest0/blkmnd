import { Beat } from '../beat/types';

type BeatsState = {
  beats: Beat[];
  isFetching: boolean;
  error: string;
};

type FiltersState = {
  query: string;
  genre: string;
  type: string;
  bpm: string;
  mood: string;
  sort: string;
};

export { BeatsState, FiltersState };
