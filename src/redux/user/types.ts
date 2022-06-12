type UserRoles = 'admin' | 'user';

type User = {
  id: number;
  username: string;
  password: string;
  role: UserRoles;
};

type UserState = {
  user: User | null;
  isFetching: boolean;
  errors: null | any;
};

export { User, UserState };
