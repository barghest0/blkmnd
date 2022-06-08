import { FC, useEffect, useState } from 'react';

import useTypedSelector from 'hooks/redux/useTypedDispatch';
import useAudio from 'hooks/useAudio';
import { Beat } from 'reduxStore/beats/types';
import * as playerSelectors from 'reduxStore/player/selectors';

import * as S from './DurationSlider.style';

type Props = {
  currentBeat: Beat | null;
};

const DurationSlider: FC<Props> = ({ currentBeat }) => {
  const [time, setTime] = useState(0);
  const { audioCurrentTime, audioDuration } = useTypedSelector(
    playerSelectors.controls,
  );
  const { currentPlayerBeat } = useTypedSelector(playerSelectors.beats);

  const { setAudioCurrentTime } = useAudio();

  const isInteractionSameBeat = currentBeat?.id === currentPlayerBeat?.id;

  const onCurrentTimeChange = (_: Event, value: number | number[]) => {
    if (!Array.isArray(value) && isInteractionSameBeat) {
      setTime(value);
    }
  };

  const onCurrentTimeCommited = () => {
    if (isInteractionSameBeat) {
      setAudioCurrentTime(time);
    }
  };

  useEffect(() => {
    if (currentBeat) {
      setTime(currentBeat.id === currentPlayerBeat?.id ? audioCurrentTime : 0);
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
