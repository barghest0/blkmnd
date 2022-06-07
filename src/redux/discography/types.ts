import { Beat } from 'reduxStore/beats/types';

type DiscographyState = {
  beats: Beat[];
  isFetching: boolean;
  errors: string;
};

export { DiscographyState };
