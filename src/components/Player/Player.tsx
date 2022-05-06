import { memo, SyntheticEvent, useEffect, useRef } from 'react';
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
    togglePlaying();
  };

  const onVolumeSliderChange = (_: Event, value: number | number[]) => {
    if (!Array.isArray(value)) {
      setVolume(value);
    }
  };

  const onDurationSliderChange = (_: Event, value: number | number[]) => {
    if (!Array.isArray(value)) {
      {
        setCurrentTime(value);
      }
    }
  };

  const beatRef = useRef(new Audio());
  const { current: playerBeat } = beatRef;

  useEffect(() => {
    if (beat) {
      playerBeat.src = require(`../../audio/${beat.track}`);
    }
    if (!isPlaying) {
      playerBeat.pause();
    } else {
      playerBeat.play();
    }
  }, [isPlaying]);

  useEffect(() => {
    playerBeat.volume = volume;
  }, [volume]);

  {
    /* useEffect(() => { */
  }
  {
    /* playerBeat.currentTime = currentTime; */
  }
  {
    /* }, [currentTime]); */
  }

  const onBeatTimeChange = (event: SyntheticEvent<HTMLAudioElement>) => {
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
      <S.PlayButton onClick={onPlayButtonClick}>
        <PlayButton />
      </S.PlayButton>

      <S.Duration
        value={currentTime}
        onChange={onDurationSliderChange}
        max={duration}
      />
      <S.Volume
        value={volume}
        min={0}
        max={1}
        step={0.01}
        onChange={onVolumeSliderChange}
      />
      <S.PlayerAudio
        ref={beatRef}
        onLoadedData={onLoadedBeatData}
        onTimeUpdate={onBeatTimeChange}
      />
    </S.Player>
  );
});

export { PlayerProps };
export default Player;
