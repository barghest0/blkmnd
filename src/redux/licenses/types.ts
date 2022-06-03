import { License } from '../beats/types';

type LicenseState = {
  licenses: License[];
  license: License | null;
  isFetching: boolean;
  errors: string;
};

export { LicenseState };
