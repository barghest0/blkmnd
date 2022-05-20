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
    const { setCurrentTime, setDuration, setBeat } = useActions();

    const { volume, currentTime, isPlaying, beat, isLoop, nextBeat } =
      useTypedSelector(state => state.player);

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
      event.currentTarget.currentTime = currentTime;
      event.currentTarget.volume = volume;
      setDuration(event.currentTarget.duration);
    };

    const onAudioEnded = () => {
      if (nextBeat) {
        setBeat(nextBeat);
      }
    };

    return (
      <S.Audio
        src={src}
        ref={ref}
        loop={isLoop}
        onEnded={onAudioEnded}
        crossOrigin="anonymous"
        onLoadedData={onLoadedBeatData}
        onTimeUpdate={onBeatTimeUpdate}
      />
    );
  }),
);

export default Audio;
