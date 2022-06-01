import {Beat} from "../beats/types";

type DiscographyState = {
  beats: Beat[];
  isFetching: boolean;
  errors: string;
};

export { DiscographyState };
