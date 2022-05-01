type Tag = {
  id: number;
  name: string;
};

type Beat = {
  id: number;
  title: string;
  bpm: number;
  accord: string;
  date: string;
  tags: Tag[];
  price: number;
  time: string;
  image: string;
  author: string;
  track: string;
};

type BeatsState = {
  featuredBeat: Beat | null;
  beats: Beat[];
  isFetching: boolean;
  error: string;
};

export { Beat, Tag, BeatsState };
