import { FC, useContext, useEffect, useState } from 'react';

import PlayerContext from 'contexts/PlayerContext';
import useTypedSelector from 'hooks/redux/useTypedDispatch';
import useActions from 'hooks/useActions';
import { Beat } from 'reduxStore/beats/types';
import * as playerSelectors from 'reduxStore/player/selectors';

import * as S from './DurationSlider.style';

type Props = {
  currentBeat: Beat | null;
};

const DurationSlider: FC<Props> = ({ currentBeat }) => {
  const { setCurrentTime } = useActions();
  const [time, setTime] = useState(0);
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
      audio.currentTime = time;
    }
  };

  useEffect(() => {
    if (currentBeat) {
      setTime(currentBeat.id === currentPlayerBeat?.id ? audioCurrentTime : 0);
    } else {
      setTime(audioCurrentTime);
    }
  }, [audioCurrentTime]);

  return (
    <S.DurationSlider
      value={time}
      onChange={onCurrentTimeChange}
      onChangeCommitted={onCurrentTimeCommited}
      max={audioDuration}
    />
  );
};

export default DurationSlider;
