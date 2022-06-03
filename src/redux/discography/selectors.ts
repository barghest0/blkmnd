import { State } from '../types';

const allBeats = (state: State) => state.discography.beats;

const isFetching = (state: State) => state.discography.isFetching;

const errors = (state: State) => state.discography.errors;

export { allBeats, isFetching, errors };
