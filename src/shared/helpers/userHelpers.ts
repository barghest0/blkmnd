import { format } from 'date-fns';

import { User } from 'redux/user/types';

const createUserComment = (user: User, text: string) => {
  const date = format(new Date(), 'MM.dd.yyyy');
  const commentUser: User = {
    id: user.id,
    username: user.username,
    password: user.password,
    role: user.role || 'user',
  };
  return { user: commentUser, text, date };
};

export { createUserComment };
