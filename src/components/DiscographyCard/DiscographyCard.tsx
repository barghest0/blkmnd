import { FC } from 'react';
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

  return (
    <S.DiscographyCard>
      <S.ThumbnailContainer>
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
        <S.Player />
      </S.Info>
    </S.DiscographyCard>
  );
};

export default DiscographyCard;
