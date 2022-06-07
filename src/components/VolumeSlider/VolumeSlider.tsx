import { FC } from 'react';

import useTypedSelector from 'hooks/redux/useTypedDispatch';
import useActions from 'hooks/useActions';
import * as playerSelectors from 'reduxStore/player/selectors';

import * as S from './VolumeSlider.style';

const VolumeSlider: FC = () => {
  const { audioVolume } = useTypedSelector(playerSelectors.controls);
  const { setVolume } = useActions();

  const onVolumeChange = (_: Event, value: number | number[]) => {
    if (!Array.isArray(value)) {
      setVolume(value);
    }
  };

  return (
    <S.VolumeSlider
      value={audioVolume}
      min={0}
      max={1}
      step={0.01}
      onChange={onVolumeChange}
    />
  );
};

export default VolumeSlider;
