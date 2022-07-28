import { State } from 'reduxStore/types';

const allDiscographyBeats = ({ discography: { beats } }: State) => beats;

const isDiscographyFetching = ({ discography: { isFetching } }: State) =>
  isFetching;

const discographyErrors = ({ discography: { errors } }: State) => errors;

export { allDiscographyBeats, isDiscographyFetching, discographyErrors };
