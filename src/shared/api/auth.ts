import { LoginValues, RegisterValues } from '../../redux/auth/types';
import { newInstance } from './instance';

const registerRequest = (userData: RegisterValues) =>
  newInstance.post('/auth/register', userData);

const loginRequest = (userData: LoginValues) =>
  newInstance.post('/auth/login', userData);

export { registerRequest, loginRequest };
