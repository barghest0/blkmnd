import { createContext } from 'react';

const audioContext = new AudioContext();

const VisualizerState = {
  audioContext,
  source: audioContext.createMediaElementSource(new Audio()),
  analyser: audioContext.createAnalyser(),
  bufferLength: 0,
  audioData: new Uint8Array(0),
};

const VisualizerContext = createContext(VisualizerState);

export default VisualizerContext;
