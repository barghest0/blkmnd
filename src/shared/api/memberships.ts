import { instance } from './instance';

const fetchAllMemberships = () => instance.get('memberships/');

export { fetchAllMemberships };
