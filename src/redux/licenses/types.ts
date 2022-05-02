import { License } from '../beat/types';

type LicenseState = {
  licenses: License[];
  isFetching: boolean;
  error: string;
};

export { LicenseState };
