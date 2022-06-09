import { FC, useEffect, useMemo } from 'react';

import VisualizerContext from 'contexts/VisualizerContext';

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

  useEffect(() => () => {
    analyser.disconnect();
    source.disconnect();
  });

  const getVisualizerContextValue = () => ({
    audioContext,
    source,
    analyser,
    bufferLength,
    audioData,
  });

  const visualizerContextValue = useMemo(getVisualizerContextValue, []);

  return (
    <VisualizerContext.Provider value={visualizerContextValue}>
      {children}
    </VisualizerContext.Provider>
  );
};

export default VisualizerProvider;
