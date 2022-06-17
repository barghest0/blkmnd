import { User } from 'reduxStore/user/types';

type BeatsState = {
  beats: Beat[];
  beat: Beat | null;
  featuredBeat: Beat | null;
  isFetching: boolean;
  errors: null | any;
};

type Comment = {
  id?: number;
  user: User;
  text: string;
  date: string;
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

type ContractValues = {
  copies: number | string;
  radioStations: number | string;
  musicVideo: number | string;
  streams: number | string;
};

type FileType = {
  id: number;
  name: string;
};

type License = {
  id: number;
  name: string;
  price: number;
  fileTypes: FileType[];
  contractValues: ContractValues;
};

type Musician = {
  id: number;
  name: string;
};

type Beat = {
  id: number;
  title: string;
  bpm: number;
  type: string;
  chord: string;
  date: string;
  tags: Tag[];
  price: number;
  featured: boolean;
  time: string;
  image: string;
  musician: Musician;
  track: string;
  licenses: License[];
  comments: Comment[];
};

export { BeatsState, FiltersState, Beat, Tag, License, Comment };
