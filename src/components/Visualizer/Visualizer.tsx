import { FC, memo, useContext, useEffect, useRef } from 'react';
import useTypedSelector from '../../hooks/redux/useTypedDispatch';
import ThemeColors from '../../shared/styles/theme';
import * as S from './Visualizer.style';
import VisualizerContext from '../../context/VisualizerContext';

const Visualizer: FC = memo(() => {
  const { isPlaying } = useTypedSelector(state => state.player);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const canvas = canvasRef.current;
  const canvasContext = canvasRef.current?.getContext('2d');

  const { analyser, bufferLength, audioData } = useContext(VisualizerContext);

  const animate = () => {
    let x = 0;

    if (canvasContext && canvas) {
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

    return requestAnimationFrame(animate);
  };

  useEffect(() => {
    const rafId = animate();
    return () => cancelAnimationFrame(rafId);
  }, [isPlaying]);

  return (
    <S.Visualizer>
      <S.VisualizerCanvas ref={canvasRef} width={1000}></S.VisualizerCanvas>
    </S.Visualizer>
  );
});

export default Visualizer;
