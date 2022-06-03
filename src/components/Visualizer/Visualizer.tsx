import { FC, memo, useContext, useEffect, useRef } from 'react';
import useTypedSelector from '../../hooks/redux/useTypedDispatch';
import ThemeColors from '../../shared/styles/theme';
import * as S from './Visualizer.style';
import VisualizerContext from '../../context/VisualizerContext';
import * as playerSelectors from '../../redux/player/selectors';

const Visualizer: FC = memo(() => {
  const { isPlayerPlaying } = useTypedSelector(playerSelectors.state);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const canvas = canvasRef.current;

  const { analyser, bufferLength, audioData } = useContext(VisualizerContext);

  const animate = () => {
    let x = 0;

    if (canvas) {
      const context = canvas.getContext('2d');
      const barWidth = canvas.width / bufferLength;
      analyser.getByteFrequencyData(audioData);
      console.log(123);

      if (context) {
        context.clearRect(0, 0, canvas.width, canvas.height);
        for (let i = 0; i < bufferLength; i += 1) {
          const barHeight = audioData[i] / 1.5;
          context.fillStyle = ThemeColors.secondColor;
          context.fillRect(x, canvas.height - barHeight, barWidth, barHeight);

          x += barWidth + 1;
        }
      }
    }

    return requestAnimationFrame(animate);
  };

  useEffect(() => {
    const rafId = animate();
    return () => cancelAnimationFrame(rafId);
  }, [isPlayerPlaying]);

  return (
    <S.Visualizer>
      <S.VisualizerCanvas ref={canvasRef} width={1000}></S.VisualizerCanvas>
    </S.Visualizer>
  );
});

export default Visualizer;
