import { LoginValues, RegisterValues } from 'reduxStore/auth/types';

import { newInstance } from './instance';

const registerRequest = (userData: RegisterValues) =>
  newInstance.post('/auth/register', userData);

const loginRequest = (userData: LoginValues) =>
  newInstance.post('/auth/login', userData);

const fetchUserData = (token: string | null) =>
  newInstance.get('/auth/me', {
    headers: { Authorization: `Bearer ${token}` },
  });

export { registerRequest, loginRequest, fetchUserData };
