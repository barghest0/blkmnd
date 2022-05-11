import { FC } from 'react';
import useTypedSelector from '../../hooks/redux/useTypedDispatch';
import useActions from '../../hooks/useActions';
import * as S from './VolumeSlider.style';

type Props = {
  audio: HTMLAudioElement | null;
};

const VolumeSlider: FC<Props> = ({ audio }) => {
  const { volume } = useTypedSelector(state => state.player);
  const { setVolume } = useActions();

  const onVolumeChangeCommited = () => {
    if (audio) {
      audio.volume = volume;
    }
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
