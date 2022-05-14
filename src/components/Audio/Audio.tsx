import {
  FC,
  forwardRef,
  memo,
  RefObject,
  SyntheticEvent,
  useEffect,
} from 'react';
import useTypedSelector from '../../hooks/redux/useTypedDispatch';
import useActions from '../../hooks/useActions';
import * as S from './Audio.style';

type Props = {
  ref: RefObject<HTMLAudioElement>;
  src: string;
};

const Audio: FC<Props> = memo(
  forwardRef(({ src }, ref) => {
    const { setCurrentTime, setDuration } = useActions();
    const { volume, currentTime, isPlaying, beat } = useTypedSelector(
      state => state.player,
    );
    const onBeatTimeUpdate = (event: SyntheticEvent<HTMLAudioElement>) => {
      setCurrentTime(event.currentTarget.currentTime);
    };

    useEffect(() => {
      const audio = ref?.current;
      if (isPlaying) {
        audio.play();
      } else {
        audio.pause();
      }
    }, [isPlaying, beat]);

    const onLoadedBeatData = (event: SyntheticEvent<HTMLAudioElement>) => {
      event.currentTarget.volume = volume;
      event.currentTarget.currentTime = currentTime;
      setDuration(event.currentTarget.duration);
    };

    return (
      <S.Audio
        src={src}
        ref={ref}
        crossOrigin="anonymous"
        onLoadedData={onLoadedBeatData}
        onTimeUpdate={onBeatTimeUpdate}
      />
    );
  }),
);

export default Audio;
