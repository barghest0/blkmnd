import { Beat } from 'reduxStore/beats/types';

type DiscographyState = {
  beats: Beat[];
  isFetching: boolean;
  errors: any | null;
};

export { DiscographyState };
