import { FC, forwardRef, SyntheticEvent, useEffect, useRef } from 'react';
import useTypedSelector from '../../hooks/redux/useTypedDispatch';
import useActions from '../../hooks/useActions';
import * as S from './Audio.style';

type Props = {
  src?: string;
};

const Audio: FC<Props> = forwardRef(({ src }, ref) => {
  const { setCurrentTime, setDuration } = useActions();
  const { volume, currentTime, isPlaying } = useTypedSelector(
    state => state.player,
  );
  const onBeatTimeUpdate = (event: SyntheticEvent<HTMLAudioElement>) => {
    setCurrentTime(event.currentTarget.currentTime);
  };

  useEffect(() => {
    if (ref.current) {
      if (isPlaying) {
        ref.current.play();
      } else {
        ref.current.pause();
      }
    }
  }, [isPlaying]);

  const onLoadedBeatData = () => {
    ref.current.volume = volume;
    ref.current.currentTime = currentTime;
    setDuration(ref.duration);
  };

  return (
    <S.Audio
      src={src}
      ref={ref}
      onLoadedData={onLoadedBeatData}
      onTimeUpdate={onBeatTimeUpdate}
    />
  );
});

export default Audio;
