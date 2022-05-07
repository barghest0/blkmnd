import { memo, SyntheticEvent, useEffect, useRef } from 'react';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import SkipNextIcon from '@mui/icons-material/SkipNext';

import useTypedSelector from '../../hooks/redux/useTypedDispatch';
import useActions from '../../hooks/useActions';
import { RouterPaths } from '../../shared/router/types';
import { StyledLink } from '../../shared/styles/links';
import AddToCardButton from '../AddToCardButton/AddToCardButton';
import PlayButton from '../PlayButton/PlayButton';
import Preloader from '../Preloader/Preloader';
import ShareButton from '../ShareButton/ShareButton';
import * as S from './Player.style';

type PlayerProps = {
  isOpen: boolean;
};

const Player = memo(() => {
  const { isOpen, duration, currentTime, volume, beat, isPlaying } =
    useTypedSelector(state => state.player);
  const { togglePlaying, setVolume, setCurrentTime, setDuration } =
    useActions();

  const onPlayButtonClick = () => {
    if (beat) {
      togglePlaying();
    }
  };

  const beatRef = useRef(new Audio());
  const { current: playerBeat } = beatRef;

  const onCurrentTimeCommited = () => {
    playerBeat.currentTime = currentTime;
  };

  const onVolumeChangeCommited = () => {
    playerBeat.volume = volume;
  };

  const onVolumeChange = (_: Event, value: number | number[]) => {
    if (!Array.isArray(value)) {
      setVolume(value);
    }
  };

  const onCurrentTimeChange = (_: Event, value: number | number[]) => {
    if (!Array.isArray(value)) {
      {
        setCurrentTime(value);
      }
    }
  };

  const onNextButtonClick = () => {
    console.log('next beat');
  };

  const onPreviousButtonClick = () => {
    console.log('previous beat');
  };

  useEffect(() => {
    if (beat) {
      playerBeat.src = require(`../../audio/${beat.track}`);
    }
  }, [beat]);

  useEffect(() => {
    if (!isPlaying) {
      playerBeat.pause();
    } else {
      playerBeat.play();
    }
  }, [isPlaying]);

  const onBeatTimeUpdate = (event: SyntheticEvent<HTMLAudioElement>) => {
    setCurrentTime(event.currentTarget.currentTime);
  };

  const onLoadedBeatData = () => {
    playerBeat.volume = volume;
    playerBeat.currentTime = currentTime;
    setDuration(playerBeat.duration);
  };

  return (
    <S.Player isOpen={isOpen}>
      {!beat ? (
        <Preloader />
      ) : (
        <S.Beat>
          <S.Thumbnail src={beat.image} />
          <S.BeatInfo>
            <S.Title>
              <StyledLink to={`${RouterPaths.beats}/${beat.id}`}>
                {beat.title}
              </StyledLink>
            </S.Title>
            <S.Musician>{beat.musician.name}</S.Musician>
          </S.BeatInfo>
          <S.Share>
            <ShareButton color={'#e8e8e8'} hasBackground={false} />
          </S.Share>
          <S.AddToCart>
            <AddToCardButton price={beat.price} />
          </S.AddToCart>
        </S.Beat>
      )}
      <S.Controls>
        <S.PreviousBeat onClick={onPreviousButtonClick}>
          <SkipPreviousIcon />
        </S.PreviousBeat>
        <S.PlayButton onClick={onPlayButtonClick}>
          <PlayButton />
        </S.PlayButton>
        <S.NextBeat onClick={onNextButtonClick}>
          <SkipNextIcon />
        </S.NextBeat>
      </S.Controls>

      <S.Duration
        value={currentTime}
        onChange={onCurrentTimeChange}
        onChangeCommitted={onCurrentTimeCommited}
        max={duration}
      />
      <S.Actions>
        <S.Volume>
          <VolumeUpIcon fontSize="small" />
          <S.VolumeSlider
            value={volume}
            min={0}
            max={1}
            step={0.01}
            onChange={onVolumeChange}
            onChangeCommitted={onVolumeChangeCommited}
          />
        </S.Volume>
        <S.Queue>
          <FormatListBulletedIcon />
        </S.Queue>
      </S.Actions>

      <S.PlayerAudio
        ref={beatRef}
        onLoadedData={onLoadedBeatData}
        onTimeUpdate={onBeatTimeUpdate}
      />
    </S.Player>
  );
});

export { PlayerProps };
export default Player;
