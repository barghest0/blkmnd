type UserRoles = 'admin' | 'user';

type User = {
  id: number;
  username: string;
  password: string;
  role: UserRoles;
};

type ProfileState = {
  profileDetails: User | null;
  isFetching: boolean;
  errors: null | any;
};

export { User, ProfileState };
