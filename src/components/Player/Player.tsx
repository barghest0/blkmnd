import { FC, memo } from 'react';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import SkipNextIcon from '@mui/icons-material/SkipNext';

import useTypedSelector from '../../hooks/redux/useTypedDispatch';
import useActions from '../../hooks/useActions';
import { RouterPaths } from '../../shared/router/types';
import { StyledLink } from '../../shared/styles/links';
import BuyButton from '../BuyButton/BuyButton';
import PlayButton from '../PlayButton/PlayButton';
import Preloader from '../Preloader/Preloader';
import ShareButton from '../ShareButton/ShareButton';
import * as S from './Player.style';

type PlayerProps = {
  isOpen: boolean;
};

type Props = {
  audioRef: React.Ref<HTMLAudioElement>;
};

const Player: FC<Props> = memo(({ audioRef }) => {
  const { isOpen, duration, currentTime, volume, beat } = useTypedSelector(
    state => state.player,
  );
  const { togglePlaying, setVolume, setCurrentTime } = useActions();

  const audio = audioRef.current;

  const onPlayButtonClick = () => {
    if (beat) {
      togglePlaying();
    }
  };

  const onCurrentTimeCommited = () => {
    audio.currentTime = currentTime;
  };

  const onVolumeChangeCommited = () => {
    audio.volume = volume;
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
            <ShareButton
              color={'#e8e8e8'}
              hasBackground={false}
              beatId={beat.id}
            />
          </S.Share>
          <S.Buy>
            <BuyButton price={beat.price} beatId={beat.id} />
          </S.Buy>
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
    </S.Player>
  );
});

export { PlayerProps };
export default Player;
