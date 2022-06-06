import { State } from 'reduxStore/types';

const user = (state: State) => state.user.user;

const errors = (state: State) => state.user.errors;

export { user, errors };
