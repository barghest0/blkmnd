import { FC } from 'react';
import { Collab } from '../../redux/collabs/types';
import { RouterPaths } from '../../shared/router/types';
import { StyledLink } from '../../shared/styles/links';
import Image from '../Image/Image';
import * as S from './CollabCard.style';

type Props = {
  collab: Collab;
};

const CollabCard: FC<Props> = ({ collab }) => {
  const { image, title, id, price } = collab;

  return (
    <S.CollabCard>
      <StyledLink to={`${RouterPaths.collabs}/${id}`}>
        <S.Thumbnail>
          <Image image={image} />
        </S.Thumbnail>
        <S.Title>{title}</S.Title>
        <S.Price>{price}</S.Price>
      </StyledLink>
    </S.CollabCard>
  );
};

export default CollabCard;
