import { User } from '../user/types';

type RegisterValues = {
  email: string;
  username: string;
  password: string;
};

type LoginValues = {
  username: string;
  password: string;
};

type AuthState = {
  token: string | null;
  isAuth: boolean;
  user: User | null;
  isFetching: boolean;
  error: string;
};

export { AuthState, RegisterValues, LoginValues };
