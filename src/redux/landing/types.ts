import { Bit } from '../beats/types';
import { Collab } from '../collabs/types';
import { SoundKit } from '../soundKits/types';

type License = {
  name: string;
  price: number;
};

type LandingState = {
  previewBit: Bit | null;
  bit: Bit[];
  licenses: License[];
  soundKits: SoundKit[];
  collabs: Collab[];
};

export { License, LandingState };
