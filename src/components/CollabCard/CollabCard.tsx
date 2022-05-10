import { FC } from 'react';
import useImagePreloader from '../../hooks/useImagePreloader';
import { Collab } from '../../redux/collabs/types';
import { RouterPaths } from '../../shared/router/types';
import { StyledLink } from '../../shared/styles/links';
import Preloader from '../Preloader/Preloader';
import * as S from './CollabCard.style';

type Props = {
  collab: Collab;
};

const CollabCard: FC<Props> = ({ collab }) => {
  const { image, title, id, price } = collab;
  const { imagesPreloaded } = useImagePreloader([image]);

  return (
    <S.CollabCard>
      <StyledLink to={`${RouterPaths.collabs}/${id}`}>
        {!imagesPreloaded ? (
          <Preloader />
        ) : (
          <S.Thumbnail src={image} width={175} height={175} />
        )}
        <S.Title>{title}</S.Title>
        <S.Price>{price}</S.Price>
      </StyledLink>
    </S.CollabCard>
  );
};

export default CollabCard;
