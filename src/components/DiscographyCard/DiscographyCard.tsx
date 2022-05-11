import { FC } from 'react';
import { useOutletContext } from 'react-router-dom';
import useActions from '../../hooks/useActions';
import { Beat } from '../../redux/beat/types';
import { RouterPaths } from '../../shared/router/types';
import { StyledLink } from '../../shared/styles/links';
import DurationSlider from '../DurationSlider/DurationSlider';
import PlayButton from '../PlayButton/PlayButton';
import * as S from './DiscographyCard.style';

type Props = {
  beat: Beat;
};

const DiscographyCard: FC<Props> = ({ beat }) => {
  const { id, image, title, musician } = beat;

  const { setBeat, openPlayer, togglePlaying } = useActions();

  const audioRef = useOutletContext();

  const audio = audioRef.audio.current;

  const onThumbnailClick = () => {
    setBeat(beat);
    openPlayer();
    togglePlaying();
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
        <S.Duration>
          <DurationSlider audio={audio} currentBeat={beat} />
        </S.Duration>
      </S.Info>
    </S.DiscographyCard>
  );
};

export default DiscographyCard;
