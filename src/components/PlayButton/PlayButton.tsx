import { FC } from 'react';
import useTypedSelector from '../../hooks/redux/useTypedDispatch';
import { Beat } from '../../redux/beat/types';
import * as S from './PlayButton.style';

type Props = {
  currentBeat: Beat;
};

const PlayButton: FC<Props> = ({ currentBeat }) => {
  const { isPlaying, beat } = useTypedSelector(state => state.player);

  return (
    <S.PlayButton>
      {beat?.id === currentBeat.id && isPlaying ? (
        <S.PauseIcon className={'override'} />
      ) : (
        <S.PlayIcon className={'override'} />
      )}
    </S.PlayButton>
  );
};

export default PlayButton;
