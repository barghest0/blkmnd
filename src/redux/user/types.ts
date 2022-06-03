type UserRoles = 'admin' | 'user';

type User = {
  id: number;
  username: string;
  password: string;
  role: UserRoles;
};

type UserState = {
  user: User | null;
  errors: string;
};

export { User, UserState };
