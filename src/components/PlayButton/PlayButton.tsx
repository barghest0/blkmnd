import { FC } from 'react';

import useTypedSelector from 'hooks/redux/useTypedDispatch';
import { Beat } from 'reduxStore/beats/types';
import * as playerSelectors from 'reduxStore/player/selectors';

import * as S from './PlayButton.style';

type Props = {
  currentBeat: Beat;
};

const PlayButton: FC<Props> = ({ currentBeat }) => {
  const { isPlayerPlaying } = useTypedSelector(playerSelectors.state);
  const { currentPlayerBeat } = useTypedSelector(playerSelectors.beats);

  return (
    <S.PlayButton>
      {currentPlayerBeat?.id === currentBeat.id && isPlayerPlaying ? (
        <S.PauseIcon className={'override'} />
      ) : (
        <S.PlayIcon className={'override'} />
      )}
    </S.PlayButton>
  );
};

export default PlayButton;
