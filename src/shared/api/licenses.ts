import { License } from '../../redux/beats/types';
import { instance } from './instance';

const fetchLicenses = () => instance.get<License[]>('licenses');

const fetchLicense = (id: number) => instance.get<License>(`licenses/${id}`);

export { fetchLicenses, fetchLicense };
