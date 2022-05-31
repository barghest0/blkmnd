import { User } from '../user/types';

type RegisterValues = {
  // email: string;
  username: string;
  password: string;
  confirmPassword: string;
};

type LoginValues = {
  username: string;
  password: string;
};

type LoginResponseValues = {
  id: number;
  token: string;
  user_id: number;
};

type AuthState = {
  token: string | null;
  isAuth: boolean;
  user: User | null;
  isFetching: boolean;
  isLoginSuccess: boolean;
  isRegisterSuccess: boolean;
  error: string;
};

export { AuthState, RegisterValues, LoginValues, LoginResponseValues };
