import { State } from '../types';

const allBeats = (state: State) => state.beats.beats;

const isFetching = (state: State) => state.beats.isFetching;

const separatedBeats = (state: State) => ({
  featuredBeat: state.beats.featuredBeat,
  beat: state.beats.beat,
});

const errors = (state: State) => state.beats.errors;

export {
 allBeats, isFetching, separatedBeats, errors 
};
