import { FC, useContext, useEffect, useState } from 'react';
import PlayerContext from '../../context/PlayerContext';
import useTypedSelector from '../../hooks/redux/useTypedDispatch';
import useActions from '../../hooks/useActions';
import { Beat } from '../../redux/beats/types';
import * as S from './DurationSlider.style';
import * as playerSelectors from '../../redux/player/selectors';

type Props = {
  currentBeat: Beat | null;
};

const DurationSlider: FC<Props> = ({ currentBeat }) => {
  const { setCurrentTime } = useActions();
  const [value, setValue] = useState(0);
  const { audioCurrentTime, audioDuration } = useTypedSelector(
    playerSelectors.controls,
  );
  const { currentPlayerBeat } = useTypedSelector(playerSelectors.beats);

  const { audio } = useContext(PlayerContext);

  const isInteractionSameBeat = currentBeat?.id === currentPlayerBeat?.id;

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
      setValue(currentBeat.id === currentPlayerBeat?.id ? audioCurrentTime : 0);
    } else {
      setValue(audioCurrentTime);
    }
  }, [audioCurrentTime]);

  return (
    <S.DurationSlider
      value={value}
      onChange={onCurrentTimeChange}
      onChangeCommitted={onCurrentTimeCommited}
      max={audioDuration}
    ></S.DurationSlider>
  );
};

export default DurationSlider;
