import { FC } from 'react';
import useActions from '../../hooks/useActions';
import { Beat } from '../../redux/beats/types';
import { RouterPaths } from '../../shared/router/types';
import { StyledLink } from '../../shared/styles/links';
import DurationSlider from '../DurationSlider/DurationSlider';
import Image from '../Image/Image';
import PlayButton from '../PlayButton/PlayButton';
import * as S from './DiscographyCard.style';

type Props = {
  beat: Beat;
};

const DiscographyCard: FC<Props> = ({ beat }) => {
  const { id, image, title, musician } = beat;

  const { openPlayer, setBeat, togglePlaying } = useActions();

  const onThumbnailClick = () => {
    openPlayer();
    togglePlaying(beat);
    setBeat(beat);
  };

  return (
    <S.DiscographyCard>
      <S.ThumbnailContainer onClick={onThumbnailClick}>
        <S.PlayButton>
          <PlayButton currentBeat={beat} />
        </S.PlayButton>
        <S.Thumbnail>
          <Image image={image} />
        </S.Thumbnail>
      </S.ThumbnailContainer>
      <S.Info>
        <StyledLink to={`${RouterPaths.beats}/${id}`}>
          <S.Title>{title}</S.Title>
        </StyledLink>
        <S.Musician>{musician.name}</S.Musician>
        <S.Duration>
          <DurationSlider currentBeat={beat} />
        </S.Duration>
      </S.Info>
    </S.DiscographyCard>
  );
};

export default DiscographyCard;
