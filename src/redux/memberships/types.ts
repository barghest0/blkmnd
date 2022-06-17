type Membership = {
  id: number;
  title: string;
  price: number;
  details: string;
};

type MembershipsState = {
  memberships: Membership[];
  isFetching: boolean;
  errors: any | null;
};

export { Membership, MembershipsState };
