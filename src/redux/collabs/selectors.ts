import { State } from '../types';

const allCollabs = (state: State) => state.collabs.collabs;

const collab = (state: State) => state.collabs.collab;

const isFetching = (state: State) => state.collabs.isFetching;

const errors = (state: State) => state.collabs.errors;

export { allCollabs, collab, isFetching, errors };
