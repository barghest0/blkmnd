import { State } from 'reduxStore/types';

const allBeats = ({ beats: { beats } }: State) => beats;

const beatsFetching = ({ beats: { isFetching } }: State) => isFetching;

const beatsErrors = ({ beats: { errors } }: State) => errors;

export { beatsErrors, allBeats, beatsFetching };
