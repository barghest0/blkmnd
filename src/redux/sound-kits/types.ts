import { SoundKit } from 'redux/sound-kit-details/types';

type SoundKitsState = {
  soundKits: SoundKit[];
  isFetching: boolean;
  errors: any | string;
};

export { SoundKitsState };
