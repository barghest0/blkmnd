import { FC } from 'react';
import { Beat } from '../../redux/beat/types';
import { RouterPaths } from '../../shared/router/types';
import { StyledLink } from '../../shared/styles/links';
import PlayButton from '../PlayButton/PlayButton';
import * as S from './DiscographyList.style';

type Props = {
  beats: Beat[];
};

const DiscographyList: FC<Props> = ({ beats }) => {
  const discographyItems = beats.map(beat => (
    <S.Beat>
      <S.ThumbnailContainer>
        <S.PlayButton>
          <PlayButton />
        </S.PlayButton>
        <S.Thumbnail src={beat.image} />
      </S.ThumbnailContainer>
      <S.Info>
        <StyledLink to={`${RouterPaths.beats}/${beat.id}`}>
          <S.Title>{beat.title}</S.Title>
        </StyledLink>
        <S.Musician>{beat.musician.name}</S.Musician>
        <S.Player />
      </S.Info>
    </S.Beat>
  ));

  return <S.DiscographyList>{discographyItems}</S.DiscographyList>;
};

export default DiscographyList;
