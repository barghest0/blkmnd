import { MembershipsState } from './types';

const MEMBERSHIPS_SLICE_NAME = 'memberships';

const MEMBERSHIPS_INITIAL_STATE: MembershipsState = {
  memberships: [],
  isFetching: false,
  errors: null,
};

const GET_MEMBERSHIPS_NAME = 'memberships/all';

export {
  MEMBERSHIPS_INITIAL_STATE,
  MEMBERSHIPS_SLICE_NAME,
  GET_MEMBERSHIPS_NAME,
};
