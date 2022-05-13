type SoundKit = {
  id: number;
  title: string;
  image: string;
  description: string;
  price: number;
};

type SoundKitsState = {
  soundKits: SoundKit[];
  soundKit: SoundKit | null;
  isFetching: boolean;
  error: string;
};

export { SoundKit, SoundKitsState };
