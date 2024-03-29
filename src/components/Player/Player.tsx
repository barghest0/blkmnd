import { FC, memo, useEffect, useState } from 'react';
import RepeatIcon from '@mui/icons-material/Repeat';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import SkipNextIcon from '@mui/icons-material/SkipNext';

import PlayButton from 'components/PlayButton/PlayButton';
import Preloader from 'components/Preloader/Preloader';
import ShareButton from 'components/ShareButton/ShareButton';
import DurationSlider from 'components/DurationSlider/DurationSlider';
import VolumeSlider from 'components/VolumeSlider/VolumeSlider';
import ChooseLicenseButton from 'components/ChooseLicenseButton/ChooseLicenseButton';
import QueueBeat from 'components/QueueBeat/QueueBeat';
import useActions from 'hooks/useActions';
import useAudio from 'hooks/useAudio';
import useTypedSelector from 'hooks/redux/useTypedDispatch';
import { RouterPaths } from 'shared/router/types';
import { StyledLink } from 'shared/styles/links';
import { Beat } from 'reduxStore/beats/types';
import * as playerSelectors from 'reduxStore/player/selectors';

import * as S from './Player.style';

const Player: FC = memo(() => {
  const { isPlayerOpen } = useTypedSelector(playerSelectors.playbackState);

  const { audioShuffle, audioLoop } = useTypedSelector(
    playerSelectors.controls,
  );

  const isPlayerBeatFeatching = useTypedSelector(
    playerSelectors.isPlayerFetching,
  );

  const queue = useTypedSelector(playerSelectors.playerQueue);

  const { currentPlayerBeat, nextPlayerBeat, previousPlayerBeat } =
    useTypedSelector(playerSelectors.playerBeats);

  const {
    getQueueBeats,
    togglePlaying,
    setBeat,
    toggleIsLoop,
    toggleIsShuffle,
  } = useActions();

  const [isQueueListOpen, setIsQueueListOpen] = useState(false);
  const [queueBeats, setQueueBeats] = useState<Beat[]>([]);
  const { toggleAudioLoop } = useAudio();

  const onQueueBeatClick = (beat: Beat) => {
    togglePlaying(beat);
    setBeat(beat);
  };

  const queueBeatsList = queueBeats.map((beat) => (
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
    toggleAudioLoop();
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
                color="#e8e8e8"
                hasBackground={false}
                product={currentPlayerBeat}
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

export default Player;
