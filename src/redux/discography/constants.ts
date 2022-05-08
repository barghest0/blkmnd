import {DiscographyState} from "./types";

const DISCORGAPHY_SLICE_NAME = 'discography';

const DISCOGRAPHY_INITIAL_STATE:DiscographyState = {
  beats: [],
  isFetching: false,
  error: '',
};

const GET_DISCOGRAPHY_BEATS = 'beats/discography';

export {
  DISCOGRAPHY_INITIAL_STATE,
  DISCORGAPHY_SLICE_NAME,
  GET_DISCOGRAPHY_BEATS,
};
