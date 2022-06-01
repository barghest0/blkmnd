import { State } from '../types';

const allBeats = (state: State) => state.beats.beats;

const isFetching = (state: State) => state.beats.isFetching;

const separatedBeats = (state: State) => ({
  featured: state.beats.featuredBeat,
  common: state.beats.beat,
});

const errors = (state: State) => state.beats.errors;

export { allBeats, isFetching, separatedBeats, errors };
