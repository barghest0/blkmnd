import instance from './instanse';

const fetchAllMemberships = () => instance.get('memberships/');

export { fetchAllMemberships };
