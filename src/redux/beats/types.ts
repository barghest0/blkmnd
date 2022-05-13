type BeatsState = {
  beats: Beat[];
  beat: Beat | null;
  isFetching: boolean;
  error: string;
};

type FiltersState = {
  query: string;
  genre: string;
  type: string;
  bpm: string;
  mood: string;
  sort: string;
};

type Tag = {
  id: number;
  name: string;
};

type License = {
  id: number;
  name: string;
  price: number;
};

type Musician = {
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
  featured: boolean;
  time: string;
  image: string;
  musician: Musician;
  track: string;
  licenses: License[];
};

export { BeatsState, FiltersState, Beat, Tag, License };
