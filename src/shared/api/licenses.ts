import { License } from '../../redux/beat/types';
import instance from './instanse';

const fetchLicenses = () => instance.get<License[]>('licenses');

const fetchLicense = (id: number) => instance.get<License>(`licenses/${id}`);

export { fetchLicenses, fetchLicense };
