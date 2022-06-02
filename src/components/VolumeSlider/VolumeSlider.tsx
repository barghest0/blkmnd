import { FC } from 'react';
import useTypedSelector from '../../hooks/redux/useTypedDispatch';
import useActions from '../../hooks/useActions';
import * as S from './VolumeSlider.style';
import * as playerSelectors from '../../redux/player/selectors';

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
    ></S.VolumeSlider>
  );
};

export default VolumeSlider;
