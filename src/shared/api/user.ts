import { newInstance } from './instance';

const fetchUserData = (token: string) =>
  newInstance.get('/auth/me', { headers: { Authorization: `Bearer ${token}` } });

export { fetchUserData };
