import { LoginValues, RegisterValues } from '../../redux/auth/types';
import instance from './instanse';

const registerRequest = (userData: RegisterValues) =>
  instance.post('/auth/register', userData);

const loginRequest = (userData: LoginValues) =>
  instance.post('/auth/login', userData);

export { registerRequest, loginRequest };
