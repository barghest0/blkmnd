import { createContext } from 'react';

const DefaultAudio = new Audio();

const AudioContext = createContext(DefaultAudio);

export { Audio, AudioContext };
