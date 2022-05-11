import { FC, memo, RefObject } from 'react';
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
import DurationSlider from '../DurationSlider/DurationSlider';
import VolumeSlider from '../VolumeSlider/VolumeSlider';

type PlayerProps = {
  isOpen: boolean;
};

type Props = {
  audioRef: RefObject<HTMLAudioElement>;
};

const Player: FC<Props> = memo(({ audioRef }) => {
  const { isOpen, beat } = useTypedSelector(state => state.player);

  const { togglePlaying } = useActions();

  const audio = audioRef.current;

  const onPlayButtonClick = () => {
    if (beat) {
      togglePlaying();
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
          {!beat ? <Preloader /> : <PlayButton currentBeat={beat} />}
        </S.PlayButton>
        <S.NextBeat onClick={onNextButtonClick}>
          <SkipNextIcon />
        </S.NextBeat>
      </S.Controls>
      <S.Duration>
        <DurationSlider audio={audio} />
      </S.Duration>
      <S.Actions>
        <S.Volume>
          <VolumeUpIcon fontSize="small" />
          <VolumeSlider audio={audio} />
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
