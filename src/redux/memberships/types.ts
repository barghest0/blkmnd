type Membership = {
  id: number;
  title: string;
  price: number;
  details: number;
};

type MembershipsState = {
  memberships: Membership[];
  isFetching: boolean;
  error: string;
};

export { Membership, MembershipsState };
