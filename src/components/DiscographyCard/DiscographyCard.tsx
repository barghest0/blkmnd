import { FC } from 'react';
import useTypedSelector from '../../hooks/redux/useTypedDispatch';
import useActions from '../../hooks/useActions';
import { Beat } from '../../redux/beat/types';
import { RouterPaths } from '../../shared/router/types';
import { StyledLink } from '../../shared/styles/links';
import PlayButton from '../PlayButton/PlayButton';
import * as S from './DiscographyCard.style';

type Props = {
  beat: Beat;
};

const DiscographyCard: FC<Props> = ({ beat }) => {
  const { id, image, title, musician } = beat;

  const { setBeat, openPlayer, togglePlaying, setCurrentTime } = useActions();

  const { duration, currentTime } = useTypedSelector(state => state.player);

  const onThumbnailClick = () => {
    setBeat(beat);
    openPlayer();
    togglePlaying();
  };

  const onCurrentTimeCommited = () => {
    audio.currentTime = currentTime;
  };

  const onCurrentTimeChange = (_: Event, value: number | number[]) => {
    if (!Array.isArray(value)) {
      {
        setCurrentTime(value);
      }
    }
  };

  return (
    <S.DiscographyCard>
      <S.ThumbnailContainer onClick={onThumbnailClick}>
        <S.PlayButton>
          <PlayButton currentBeat={beat} />
        </S.PlayButton>
        <S.Thumbnail src={image} />
      </S.ThumbnailContainer>
      <S.Info>
        <StyledLink to={`${RouterPaths.beats}/${id}`}>
          <S.Title>{title}</S.Title>
        </StyledLink>
        <S.Musician>{musician.name}</S.Musician>
        <S.Player
          value={currentTime}
          onChange={onCurrentTimeChange}
          onChangeCommitted={onCurrentTimeCommited}
          max={duration}
        />
      </S.Info>
    </S.DiscographyCard>
  );
};

export default DiscographyCard;
