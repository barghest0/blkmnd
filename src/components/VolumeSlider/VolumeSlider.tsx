import { FC } from 'react';
import useTypedSelector from '../../hooks/redux/useTypedDispatch';
import useActions from '../../hooks/useActions';
import useAudio from '../../hooks/useAudio';
import player from '../../services/Player';
import * as S from './VolumeSlider.style';

const VolumeSlider: FC = () => {
  const { volume } = useTypedSelector(state => state.player);
  const { setVolume } = useActions();

  const { setAudioVolume } = useAudio();

  const onVolumeChangeCommited = () => {
    setAudioVolume();
  };

  const onVolumeChange = (_: Event, value: number | number[]) => {
    if (!Array.isArray(value)) {
      setVolume(value);
    }
  };

  return (
    <S.VolumeSlider
      value={volume}
      min={0}
      max={1}
      step={0.01}
      onChange={onVolumeChange}
      onChangeCommitted={onVolumeChangeCommited}
    ></S.VolumeSlider>
  );
};

export default VolumeSlider;
