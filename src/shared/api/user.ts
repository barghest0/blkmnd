import { newInstance } from './instance';

const fetchUserData = (token: string | null) => newInstance.get('/auth/me', {
  headers: { Authorization: `Bearer ${token}` },
});

export { fetchUserData };
