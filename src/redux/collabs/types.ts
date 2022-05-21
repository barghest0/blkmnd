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
  collab: Collab;
  isFetching: boolean;
  error: string;
};

export { Collab, CollabsState };
