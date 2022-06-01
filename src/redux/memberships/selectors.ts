import { State } from '../types';

const allMemberships = (state: State) => state.memberships.memberships;

const isFetching = (state: State) => state.memberships.isFetching;

const errors = (state: State) => state.memberships.errors;

export { allMemberships, isFetching, errors };
