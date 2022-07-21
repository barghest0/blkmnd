import { License } from 'redux/beats/types';
import { User } from 'redux/user/types';

type Comment = {
  id?: number;
  user: User;
  text: string;
  date: string;
};

type Musician = {
  id: number;
  name: string;
};

type Tag = {
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

type BeatDetailsState = {
  beat: Beat | null;
  isBeatFetching: boolean;
  errors: any | null;
};

export { BeatDetailsState, Beat, Comment, Musician, Tag };
