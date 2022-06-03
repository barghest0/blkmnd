import { Comment } from '../beats/types';

type SoundKit = {
  id: number;
  title: string;
  type: string;
  image: string;
  description: string;
  price: number;
  comments: Comment[];
};

type SoundKitsState = {
  soundKits: SoundKit[];
  soundKit: SoundKit | null;
  isFetching: boolean;
  errors: string;
};

export { SoundKit, SoundKitsState };
