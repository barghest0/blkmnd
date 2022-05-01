type Tag = {
  name: string;
};

type Beat = {
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
  previewBeat: Beat | null;
  beats: Beat[];
  isFetching: boolean;
  error: string;
};

export { Beat, Tag, BeatsState };
