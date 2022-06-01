import { createContext } from 'react';
import { PlayerState } from '../redux/player/types';

type PlayerContextState = {
  state: PlayerState;
  audio: HTMLAudioElement;
};

const PlayerDefaultState = {
  state: {} as PlayerState,
  audio: new Audio(),
};

const PlayerContext = createContext(PlayerDefaultState);

export { PlayerContextState };
export default PlayerContext;
