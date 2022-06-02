import { FC, memo, useContext, useEffect, useState } from 'react';
import RepeatIcon from '@mui/icons-material/Repeat';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import SkipNextIcon from '@mui/icons-material/SkipNext';

import useTypedSelector from '../../hooks/redux/useTypedDispatch';
import useActions from '../../hooks/useActions';
import { Beat } from '../../redux/beats/types';
import { RouterPaths } from '../../shared/router/types';
import { StyledLink } from '../../shared/styles/links';
import PlayButton from '../PlayButton/PlayButton';
import Preloader from '../Preloader/Preloader';
import ShareButton from '../ShareButton/ShareButton';
import * as S from './Player.style';
import DurationSlider from '../DurationSlider/DurationSlider';
import VolumeSlider from '../VolumeSlider/VolumeSlider';
import ChooseLicenseButton from '../ChooseLicenseButton/ChooseLicenseButton';
import QueueBeat from '../QueueBeat/QueueBeat';
import * as playerSelectors from '../../redux/player/selectors';
import PlayerContext from '../../context/PlayerContext';

type PlayerProps = {
  isOpen: boolean;
  isQueueListOpen: boolean;
};

type QueueBeatProps = {
  isActive: boolean;
};

const Player: FC = memo(() => {
  const { isPlayerOpen } = useTypedSelector(playerSelectors.state);

  const { audioShuffle, audioLoop } = useTypedSelector(
    playerSelectors.controls,
  );

  const isPlayerBeatFeatching = useTypedSelector(playerSelectors.isFetching);

  const queue = useTypedSelector(playerSelectors.queue);

  const { currentPlayerBeat, nextPlayerBeat, previousPlayerBeat } =
    useTypedSelector(playerSelectors.beats);

  const {
    getQueueBeats,
    togglePlaying,
    setBeat,
    toggleIsLoop,
    toggleIsShuffle,
  } = useActions();

  const [isQueueListOpen, setIsQueueListOpen] = useState(false);
  const [queueBeats, setQueueBeats] = useState<Beat[]>([]);

  const onQueueBeatClick = (beat: Beat) => {
    setBeat(beat);
    togglePlaying(beat);
  };

  const queueBeatsList = queueBeats.map(beat => (
    <S.QueueBeat
      key={beat.id}
      isActive={beat.id === currentPlayerBeat?.id}
      onClick={() => onQueueBeatClick(beat)}
    >
      <QueueBeat beat={beat} />
    </S.QueueBeat>
  ));

  const onPlayButtonClick = () => {
    if (currentPlayerBeat) {
      togglePlaying(currentPlayerBeat);
    }
  };

  const onShuffleButtonClick = () => {
    toggleIsShuffle();
  };

  const onLoopButtonClick = () => {
    toggleIsLoop();
  };

  useEffect(() => {
    getQueueBeats();
  }, []);

  const onNextButtonClick = () => {
    if (nextPlayerBeat) {
      setBeat(nextPlayerBeat);
    }
  };

  const onPreviousButtonClick = () => {
    if (previousPlayerBeat) {
      setBeat(previousPlayerBeat);
    }
  };

  const onQueueButtonClick = () => {
    setQueueBeats(queue);
    setIsQueueListOpen(!isQueueListOpen);
  };

  return (
    <S.Player isOpen={isPlayerOpen} isQueueListOpen={isQueueListOpen}>
      <S.PlayerControls>
        {!currentPlayerBeat ? (
          <Preloader />
        ) : (
          <S.Beat>
            <S.Thumbnail src={currentPlayerBeat.image} />
            <S.BeatInfo>
              <S.Title>
                <StyledLink to={`${RouterPaths.beats}/${currentPlayerBeat.id}`}>
                  {currentPlayerBeat.title}
                </StyledLink>
              </S.Title>
              <S.Musician>{currentPlayerBeat.musician.name}</S.Musician>
            </S.BeatInfo>
            <S.Share>
              <ShareButton
                color={'#e8e8e8'}
                hasBackground={false}
                beatId={currentPlayerBeat.id}
              />
            </S.Share>
            <S.Buy>
              <ChooseLicenseButton
                price={currentPlayerBeat.price}
                beat={currentPlayerBeat}
              />
            </S.Buy>
          </S.Beat>
        )}
        <S.Controls>
          <S.Loop onClick={onLoopButtonClick}>
            <RepeatIcon
              fontSize="small"
              color={audioLoop ? 'primary' : 'inherit'}
            />
          </S.Loop>
          <S.PreviousBeat onClick={onPreviousButtonClick}>
            <SkipPreviousIcon />
          </S.PreviousBeat>
          <S.PlayButton onClick={onPlayButtonClick}>
            {!currentPlayerBeat ? (
              <Preloader />
            ) : (
              <PlayButton currentBeat={currentPlayerBeat} />
            )}
          </S.PlayButton>
          <S.NextBeat onClick={onNextButtonClick}>
            <SkipNextIcon />
          </S.NextBeat>
          <S.Shuffle onClick={onShuffleButtonClick}>
            <ShuffleIcon
              color={audioShuffle ? 'primary' : 'inherit'}
              fontSize="small"
            />
          </S.Shuffle>
        </S.Controls>
        <S.Duration>
          <DurationSlider currentBeat={currentPlayerBeat} />
        </S.Duration>
        <S.Actions>
          <S.Volume>
            <VolumeUpIcon fontSize="small" />
            <VolumeSlider />
          </S.Volume>
          <S.Queue onClick={onQueueButtonClick}>
            <FormatListBulletedIcon />
          </S.Queue>
        </S.Actions>
      </S.PlayerControls>
      <S.QueueList>
        {isPlayerBeatFeatching ? <Preloader /> : queueBeatsList}
      </S.QueueList>
    </S.Player>
  );
});

export { PlayerProps, QueueBeatProps };
export default Player;
