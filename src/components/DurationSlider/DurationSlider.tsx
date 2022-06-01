import {
  FC,
  SyntheticEvent,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import PlayerContext from '../../context/PlayerContext';
import useTypedSelector from '../../hooks/redux/useTypedDispatch';
import useActions from '../../hooks/useActions';
import useAudio from '../../hooks/useAudio';
import { Beat } from '../../redux/beats/types';
import * as S from './DurationSlider.style';

type Props = {
  currentBeat: Beat | null;
};

const DurationSlider: FC<Props> = ({ currentBeat }) => {
  const { setCurrentTime } = useActions();
  const [value, setValue] = useState(0);
  const { currentTime, duration, beat } = useTypedSelector(
    state => state.player,
  );

  const { audio } = useContext(PlayerContext);

  const isInteractionSameBeat = currentBeat?.id === beat?.id;

  const onCurrentTimeChange = (_: Event, value: number | number[]) => {
    if (!Array.isArray(value) && isInteractionSameBeat) {
      setCurrentTime(value);
    }
  };

  const onCurrentTimeCommited = () => {
    if (isInteractionSameBeat) {
      audio.currentTime = value;
    }
  };

  useEffect(() => {
    if (currentBeat) {
      setValue(currentBeat.id === beat?.id ? currentTime : 0);
    } else {
      setValue(currentTime);
    }
  }, [currentTime]);

  return (
    <S.DurationSlider
      value={value}
      onChange={onCurrentTimeChange}
      onChangeCommitted={onCurrentTimeCommited}
      max={duration}
    ></S.DurationSlider>
  );
};

export default DurationSlider;
