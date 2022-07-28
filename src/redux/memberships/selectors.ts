import { State } from 'reduxStore/types';

const allMemberships = ({ memberships: { memberships } }: State) => memberships;

const isMembeshipsFetching = ({ memberships: { isFetching } }: State) =>
  isFetching;

const membershipsErrors = ({ memberships: { errors } }: State) => errors;

export { allMemberships, isMembeshipsFetching, membershipsErrors };
