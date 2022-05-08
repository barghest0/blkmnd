import { FC, memo, useCallback, useEffect, useRef, useState } from 'react';
import useTypedSelector from '../../hooks/redux/useTypedDispatch';
import * as S from './Visualizer.style';

type Props = {
  audioRef: React.Ref<HTMLAudioElement>;
};

const Visualizer: FC<Props> = memo(({ audioRef }) => {
  const { beat, isPlaying } = useTypedSelector(state => state.player);
  const [analyser, setAnalyser] = useState<AnalyserNode>();
  const [bufferLength, setBufferLength] = useState(0);
  const [audioData, setAudioData] = useState(new Uint8Array(0));

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const canvas = canvasRef.current;
  const canvasContext = canvasRef.current?.getContext('2d');

  const audio = audioRef.current;

  const animate = () => {
    let x = 0;
    requestAnimationFrame(animate);

    if (canvasContext && canvas && analyser) {
      const barWidth = canvas.width / bufferLength;
      canvasContext.clearRect(0, 0, canvas.width, canvas.height);
      analyser.getByteFrequencyData(audioData);

      for (let i = 0; i < bufferLength; i += 1) {
        const barHeight = audioData[i] - 60;
        canvasContext.fillStyle = '#fff';
        canvasContext.fillRect(
          x,
          canvas.height - barHeight,
          barWidth,
          barHeight,
        );
        x += barWidth + 3;
      }
    }
  };

  useEffect(() => {
    const audioContext = new window.AudioContext();

    if (audio && beat) {
      const source = audioContext.createMediaElementSource(audio);
      const analyser = audioContext.createAnalyser();
      source.connect(analyser);
      analyser.connect(audioContext.destination);
      analyser.fftSize = 512;

      const bufferLength = analyser.frequencyBinCount;

      setAudioData(new Uint8Array(bufferLength));
      setAnalyser(analyser);
      setBufferLength(bufferLength);
    }
  }, [beat, audio]);

  useEffect(() => {
    animate();
  }, [bufferLength]);

  return (
    <S.Visualizer>
      <canvas ref={canvasRef} width={800} height={100}></canvas>
    </S.Visualizer>
  );
});

export default Visualizer;
