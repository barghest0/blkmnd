import instance from './instanse';

const fetchUserData = (token: string) =>
  instance.get('/auth/me', { headers: { Authorization: `Bearer ${token}` } });

export { fetchUserData };
