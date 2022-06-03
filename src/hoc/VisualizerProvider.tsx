import { FC, useEffect } from 'react';
import VisualizerContext from '../context/VisualizerContext';

type Props = {
  audio: HTMLAudioElement;
  children: React.ReactNode;
};

const VisualizerProvider: FC<Props> = ({ audio, children }) => {
  const audioContext = new AudioContext();
  const source = audioContext.createMediaElementSource(audio);
  const analyser = audioContext.createAnalyser();
  source.connect(analyser);
  analyser.connect(audioContext.destination);
  analyser.fftSize = 256;
  analyser.maxDecibels = 0;

  const bufferLength = analyser.frequencyBinCount;

  const audioData = new Uint8Array(bufferLength);

  useEffect(() => {
    return () => {
      analyser.disconnect();
      source.disconnect();
    };
  });

  return (
    <VisualizerContext.Provider
      value={{ audioContext, source, analyser, bufferLength, audioData }}
    >
      {children}
    </VisualizerContext.Provider>
  );
};

export default VisualizerProvider;
