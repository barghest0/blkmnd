import { FC, useState } from 'react';

import useAudio from 'hooks/useAudio';
import useTypedSelector from 'hooks/redux/useTypedDispatch';
import * as playerSelectors from 'reduxStore/player/selectors';

import * as S from './VolumeSlider.style';

const VolumeSlider: FC = () => {
  const { audioVolume } = useTypedSelector(playerSelectors.controls);
  const [volume, setVolume] = useState(audioVolume);
  const { setAudioVolume } = useAudio();

  const onVolumeChange = (_: Event, value: number | number[]) => {
    if (!Array.isArray(value)) {
      setVolume(value);
    }
  };

  const onVolumeChangeCommited = () => {
    setAudioVolume(volume);
  };

  return (
    <S.VolumeSlider
      value={volume}
      min={0}
      max={1}
      step={0.01}
      onChange={onVolumeChange}
      onChangeCommitted={onVolumeChangeCommited}
    />
  );
};

export default VolumeSlider;
