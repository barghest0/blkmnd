import { State } from '../types';

const allLicenses = ({ licenses: { licenses } }: State) => licenses;

const isLicensesFetching = ({ licenses: { isFetching } }: State) => isFetching;

const licensesErrors = ({ licenses: { errors } }: State) => errors;

export { allLicenses, isLicensesFetching, licensesErrors };
