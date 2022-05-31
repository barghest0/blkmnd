import { User } from '../user/types';

type LoginErrors = {
  password: string[];
  username: string[];
};

type RegisterErrors = {
  username: string[];
};

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
  loginErrors: LoginErrors | null;
  registerErrors: RegisterErrors | null;
};

export {
  AuthState,
  RegisterValues,
  LoginValues,
  LoginResponseValues,
  LoginErrors,
  RegisterErrors,
};
