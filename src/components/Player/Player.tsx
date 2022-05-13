import { FC, memo, RefObject, useEffect, useState } from 'react';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import SkipNextIcon from '@mui/icons-material/SkipNext';

import useTypedSelector from '../../hooks/redux/useTypedDispatch';
import useActions from '../../hooks/useActions';
import { Beat } from '../../redux/beats/types';
import { RouterPaths } from '../../shared/router/types';
import { StyledLink } from '../../shared/styles/links';
import BuyButton from '../BuyButton/BuyButton';
import PlayButton from '../PlayButton/PlayButton';
import Preloader from '../Preloader/Preloader';
import ShareButton from '../ShareButton/ShareButton';
import * as S from './Player.style';
import DurationSlider from '../DurationSlider/DurationSlider';
import VolumeSlider from '../VolumeSlider/VolumeSlider';
import { FIRST_BEAT } from './constants';

type PlayerProps = {
  isOpen: boolean;
  isQueueListOpen: boolean;
};

type QueueBeatProps = {
  isActive: boolean;
};

type Props = {
  audioRef: RefObject<HTMLAudioElement>;
};

const Player: FC<Props> = memo(({ audioRef }) => {
  const { isOpen, beat: playerBeat } = useTypedSelector(state => state.player);

  const { togglePlaying, getQueueBeats, setBeat, openPlayer } = useActions();

  const { queue, isFetching, isPlaying } = useTypedSelector(
    state => state.player,
  );

  const [isQueueListOpen, setIsQueueListOpen] = useState(false);
  const [queueBeats, setQueueBeats] = useState<Beat[]>([]);

  const audio = audioRef.current;

  const currentBeatIndex = queue.findIndex(beat => beat.id === playerBeat?.id);

  const onQueueBeatClick = (beat: Beat) => {
    setBeat(beat);
    if (!isOpen) {
      openPlayer();
    }
    if (playerBeat) {
      if (beat.id === playerBeat.id) {
        togglePlaying();
      }
      if (!isPlaying && beat.id !== playerBeat.id) {
        togglePlaying();
      }
    } else {
      togglePlaying();
    }
  };

  const queueBeatsList = queueBeats.map(beat => (
    <S.QueueBeat
      key={beat.id}
      isActive={beat.id === playerBeat?.id}
      onClick={() => onQueueBeatClick(beat)}
    >
      {beat.title}
    </S.QueueBeat>
  ));

  const onPlayButtonClick = () => {
    if (playerBeat) {
      togglePlaying();
    }
  };

  useEffect(() => {
    getQueueBeats();
  }, []);

  const onNextButtonClick = () => {
    const nextBeatIndex = currentBeatIndex + 1;
    const lastQueueBeatIndex = queue.length - 1;
    const isQueueEnd = currentBeatIndex === lastQueueBeatIndex;
    if (isQueueEnd) {
      setBeat(queue[FIRST_BEAT]);
    } else {
      setBeat(queue[nextBeatIndex]);
    }
  };

  const onPreviousButtonClick = () => {
    const previousBeatIndex = currentBeatIndex - 1;
    const isQueueStart = currentBeatIndex === FIRST_BEAT;

    if (!isQueueStart) {
      setBeat(queue[previousBeatIndex]);
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
              <BuyButton price={playerBeat.price} beatId={playerBeat.id} />
            </S.Buy>
          </S.Beat>
        )}
        <S.Controls>
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
        </S.Controls>
        <S.Duration>
          <DurationSlider audio={audio} currentBeat={playerBeat} />
        </S.Duration>
        <S.Actions>
          <S.Volume>
            <VolumeUpIcon fontSize="small" />
            <VolumeSlider audio={audio} />
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
