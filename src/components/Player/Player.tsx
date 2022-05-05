import useTypedSelector from '../../hooks/redux/useTypedDispatch';
import useActions from '../../hooks/useActions';
import PlayButton from '../PlayButton/PlayButton';
import * as S from './Player.style';

type PlayerProps = {
  isOpen: boolean;
};

const Player = () => {
  const { isOpen, duration, currentTime } = useTypedSelector(
    state => state.player,
  );
  const { togglePlaying } = useActions();

  const onPlayButtonClick = () => {
    togglePlaying();
  };

  return (
    <S.Player isOpen={isOpen}>
      <S.PlayButton onClick={onPlayButtonClick}>
        <PlayButton />
      </S.PlayButton>
      <S.Duration defaultValue={0} value={currentTime} max={duration || 100} />
    </S.Player>
  );
};

export { PlayerProps };
export default Player;
