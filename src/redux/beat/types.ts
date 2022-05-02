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

type BeatState = {
  featuredBeat: Beat | null;
  beat: Beat | null;
  error: string;
};

export { Beat, Tag, BeatState };
