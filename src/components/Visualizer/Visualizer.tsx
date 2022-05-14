import { FC, memo, useEffect, useRef, useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import useTypedSelector from '../../hooks/redux/useTypedDispatch';
import ThemeColors from '../../shared/styles/theme';
import * as S from './Visualizer.style';

const Visualizer: FC = memo(() => {
  const { isPlaying } = useTypedSelector(state => state.player);
  const [analyser, setAnalyser] = useState<AnalyserNode>();
  const [bufferLength, setBufferLength] = useState(0);
  const [audioData, setAudioData] = useState(new Uint8Array(0));

  const audioRef = useOutletContext();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const canvas = canvasRef.current;
  const canvasContext = canvasRef.current?.getContext('2d');

  const audio = audioRef.audio.current;

  const animate = () => {
    let x = 0;
    requestAnimationFrame(animate);

    if (canvasContext && canvas && analyser) {
      const barWidth = canvas.width / bufferLength;
      canvasContext.clearRect(0, 0, canvas.width, canvas.height);
      analyser.getByteFrequencyData(audioData);

      for (let i = 0; i < bufferLength; i += 1) {
        const barHeight = audioData[i] / 1.5;
        canvasContext.fillStyle = ThemeColors.secondColor;
        canvasContext.fillRect(
          x,
          canvas.height - barHeight,
          barWidth,
          barHeight,
        );

        x += barWidth + 1;
      }
    }
  };

  useEffect(() => {
    const audioContext = new window.AudioContext();

    if (audio) {
      const source = audioContext.createMediaElementSource(audio);
      const analyser = audioContext.createAnalyser();
      source.connect(analyser);
      analyser.connect(audioContext.destination);
      analyser.fftSize = 256;

      const bufferLength = analyser.frequencyBinCount;

      setAudioData(new Uint8Array(bufferLength));
      setAnalyser(analyser);
      setBufferLength(bufferLength);
    }
  }, [audio]);

  useEffect(() => {
    if (isPlaying) {
      animate();
    }
  }, [bufferLength]);

  return (
    <S.Visualizer>
      <S.VisualizerCanvas ref={canvasRef} width={1000}></S.VisualizerCanvas>
    </S.Visualizer>
  );
});

export default Visualizer;
