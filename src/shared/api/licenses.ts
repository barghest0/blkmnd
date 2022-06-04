import { License } from 'reduxStore/beats/types';

import { instance } from './instance';

const fetchLicenses = () => instance.get<License[]>('licenses');

const fetchLicense = (id: number) => instance.get<License>(`licenses/${id}`);

export { fetchLicenses, fetchLicense };
