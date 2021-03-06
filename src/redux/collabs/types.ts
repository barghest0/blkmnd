type Collab = {
  id: number;
  title: string;
  description: string;
  type: string;
  price: number;
  image: string;
};

type CollabsState = {
  collabs: Collab[];
  collab: Collab | null;
  isFetching: boolean;
  errors: any | null;
};

export { Collab, CollabsState };
