import { License } from '../../redux/beat/types';
import instance from './instanse';

const fetchLicenses = () => instance.get<License[]>('licenses');

export { fetchLicenses };
