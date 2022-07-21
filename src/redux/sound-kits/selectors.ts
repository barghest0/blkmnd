import { State } from 'reduxStore/types';

const allSoundKits = ({ soundKits: { soundKits } }: State) => soundKits;

const isSoundKitsFetching = ({ soundKits: { isFetching } }: State) =>
  isFetching;

const soundKitsErrors = ({ soundKits: { errors } }: State) => errors;

export { allSoundKits, soundKitsErrors, isSoundKitsFetching };
