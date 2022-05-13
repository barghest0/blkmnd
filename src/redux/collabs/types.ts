type Collab = {
  id: number;
  title: string;
  description: string;
  price: string;
  image: string;
};

type CollabsState = {
  collabs: Collab[];
  collab: Collab;
  isFetching: boolean;
  error: string;
};

export { Collab, CollabsState };
