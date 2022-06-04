import { FC, memo, useContext, useLayoutEffect, useRef } from 'react';

import useTypedSelector from 'hooks/redux/useTypedDispatch';
import ThemeColors from 'shared/styles/theme';
import * as playerSelectors from 'reduxStore/player/selectors';
import VisualizerContext from 'contexts/VisualizerContext';

import * as S from './Visualizer.style';

const Visualizer: FC = memo(() => {
  const { currentPlayerBeat } = useTypedSelector(playerSelectors.beats);
  const { isPlayerPlaying } = useTypedSelector(playerSelectors.state);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const canvas = canvasRef.current;

  let rafId: number;

  const { analyser, bufferLength, audioData } = useContext(VisualizerContext);

  const stopVisualazerAnimate = () => {
    cancelAnimationFrame(rafId);
  };

  const animate = () => {
    let x = 0;

    if (canvas) {
      const context = canvas.getContext('2d');
      const barWidth = canvas.width / bufferLength;
      analyser.getByteFrequencyData(audioData);

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

    rafId = requestAnimationFrame(animate);
  };

  useLayoutEffect(() => {
    animate();

    if (!isPlayerPlaying) {
      setTimeout(stopVisualazerAnimate, 500);
    }

    return () => {
      setTimeout(stopVisualazerAnimate, 500);
    };
  }, [canvas, currentPlayerBeat, isPlayerPlaying]);

  return (
    <S.Visualizer>
      <S.VisualizerCanvas ref={canvasRef} width={1000}></S.VisualizerCanvas>
    </S.Visualizer>
  );
});

export default Visualizer;
