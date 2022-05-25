import { FC, memo, useCallback, useEffect, useState } from 'react';
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
import useAudio from '../../hooks/useAudio';

type PlayerProps = {
  isOpen: boolean;
  isQueueListOpen: boolean;
};

type QueueBeatProps = {
  isActive: boolean;
};

const Player: FC = memo(() => {
  const { isOpen, beat: playerBeat } = useTypedSelector(state => state.player);

  const { getQueueBeats, toggleIsLoop, toggleIsShuffle } = useActions();

  const { queue, isFetching, isLoop, isShuffle, nextBeat, previousBeat } =
    useTypedSelector(state => state.player);

  const [isQueueListOpen, setIsQueueListOpen] = useState(false);
  const [queueBeats, setQueueBeats] = useState<Beat[]>([]);

  const { setPlayerBeat, toggleAudioPlaying, setAudioLoop } = useAudio();

  const onQueueBeatClick = (beat: Beat) => {
    toggleAudioPlaying(beat);
    setPlayerBeat(beat);
  };

  const queueBeatsList = queueBeats.map(beat => (
    <S.QueueBeat
      key={beat.id}
      isActive={beat.id === playerBeat?.id}
      onClick={() => onQueueBeatClick(beat)}
    >
      <QueueBeat beat={beat} />
    </S.QueueBeat>
  ));

  const onPlayButtonClick = () => {
    if (playerBeat) {
      toggleAudioPlaying(playerBeat);
    }
  };

  const onShuffleButtonClick = () => {
    toggleIsShuffle();
  };

  const onLoopButtonClick = () => {
    toggleIsLoop();
    setAudioLoop();
  };

  useEffect(() => {
    getQueueBeats();
  }, []);

  const onNextButtonClick = () => {
    if (nextBeat) {
      setPlayerBeat(nextBeat);
    }
  };

  const onPreviousButtonClick = () => {
    if (previousBeat) {
      setPlayerBeat(previousBeat);
    }
  };

  const onQueueButtonClick = () => {
    setQueueBeats(queue);
    setIsQueueListOpen(!isQueueListOpen);
  };

  return (
    <S.Player isOpen={isOpen} isQueueListOpen={isQueueListOpen}>
      <S.PlayerTools>
        {!playerBeat ? (
          <Preloader />
        ) : (
          <S.Beat>
            <S.Thumbnail src={playerBeat.image} />
            <S.BeatInfo>
              <S.Title>
                <StyledLink to={`${RouterPaths.beats}/${playerBeat.id}`}>
                  {playerBeat.title}
                </StyledLink>
              </S.Title>
              <S.Musician>{playerBeat.musician.name}</S.Musician>
            </S.BeatInfo>
            <S.Share>
              <ShareButton
                color={'#e8e8e8'}
                hasBackground={false}
                beatId={playerBeat.id}
              />
            </S.Share>
            <S.Buy>
              <ChooseLicenseButton price={playerBeat.price} beat={playerBeat} />
            </S.Buy>
          </S.Beat>
        )}
        <S.Controls>
          <S.Loop onClick={onLoopButtonClick}>
            <RepeatIcon
              fontSize="small"
              color={isLoop ? 'primary' : 'inherit'}
            />
          </S.Loop>
          <S.PreviousBeat onClick={onPreviousButtonClick}>
            <SkipPreviousIcon />
          </S.PreviousBeat>
          <S.PlayButton onClick={onPlayButtonClick}>
            {!playerBeat ? (
              <Preloader />
            ) : (
              <PlayButton currentBeat={playerBeat} />
            )}
          </S.PlayButton>
          <S.NextBeat onClick={onNextButtonClick}>
            <SkipNextIcon />
          </S.NextBeat>
          <S.Shuffle onClick={onShuffleButtonClick}>
            <ShuffleIcon
              color={isShuffle ? 'primary' : 'inherit'}
              fontSize="small"
            />
          </S.Shuffle>
        </S.Controls>
        <S.Duration>
          <DurationSlider currentBeat={playerBeat} />
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
      </S.PlayerTools>
      <S.QueueList>{isFetching ? <Preloader /> : queueBeatsList}</S.QueueList>
    </S.Player>
  );
});

export { PlayerProps, QueueBeatProps };
export default Player;
