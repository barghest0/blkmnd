import useTypedSelector from '../../hooks/redux/useTypedDispatch';
import * as S from './PlayButton.style';

const PlayButton = () => {
  const { isPlaying } = useTypedSelector(state => state.player);

  return (
    <S.PlayButton>
      {isPlaying ? (
        <S.PauseIcon className={'override'} />
      ) : (
        <S.PlayIcon className={'override'} />
      )}
    </S.PlayButton>
  );
};

export default PlayButton;
