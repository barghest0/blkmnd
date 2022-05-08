import { Beat } from '../beat/types';

type DiscographyState = {
  beats: Beat[];
  isFetching: boolean;
  error: string;
};

export { DiscographyState };
