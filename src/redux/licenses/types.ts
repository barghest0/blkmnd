import { License } from '../beats/types';

type LicenseState = {
  licenses: License[];
  license: License | null;
  isFetching: boolean;
  errors: any | null;
};

export { LicenseState };
