import { State } from '../types';

const allSoundKits = (state: State) => state.soundKits.soundKits;

const soundKit = (state: State) => state.soundKits.soundKit;

const isFetching = (state: State) => state.soundKits.isFetching;

const errors = (state: State) => state.soundKits.errors;

export {
  allSoundKits, soundKit, isFetching, errors,
};
