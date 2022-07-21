import { Comment } from 'redux/beat-details/types';

type SoundKit = {
  id: number;
  title: string;
  type: string;
  image: string;
  description: string;
  price: number;
  comments: Comment[];
};

type SoundKitDetailsState = {
  soundKit: SoundKit | null;
  isFetching: boolean;
  errors: any | string;
};

export { SoundKit, SoundKitDetailsState };
