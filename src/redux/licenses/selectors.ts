import { State } from '../types';

const allLicenses = (state: State) => state.licenses.licenses;

const license = (state: State) => state.licenses.license;

const isFetching = (state: State) => state.licenses.isFetching;

const errors = (state: State) => state.licenses.errors;

export {
  allLicenses, license, isFetching, errors,
};
