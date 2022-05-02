type SoundKit = {
  id: number;
  name: string;
  image: string;
  description: string;
  price: number;
};

type SoundKitsState = {
  soundKits: SoundKit[];
  isFetching: boolean;
  error: string;
};

export { SoundKit, SoundKitsState };
