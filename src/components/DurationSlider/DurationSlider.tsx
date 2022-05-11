import { FC } from 'react';
import useTypedSelector from '../../hooks/redux/useTypedDispatch';
import useActions from '../../hooks/useActions';
import * as S from './DurationSlider.style';

type Props = {
  audio: HTMLAudioElement | null;
};

const DurationSlider: FC<Props> = ({ audio }) => {
  const { setCurrentTime } = useActions();
  const { currentTime, duration } = useTypedSelector(state => state.player);

  const onCurrentTimeChange = (_: Event, value: number | number[]) => {
    if (!Array.isArray(value)) {
      {
        setCurrentTime(value);
      }
    }
  };

  const onCurrentTimeCommited = () => {
    if (audio) {
      audio.currentTime = currentTime;
    }
  };

  return (
    <S.DurationSlider
      value={currentTime}
      onChange={onCurrentTimeChange}
      onChangeCommitted={onCurrentTimeCommited}
      max={duration}
    ></S.DurationSlider>
  );
};

export default DurationSlider;
