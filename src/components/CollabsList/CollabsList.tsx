import { FC } from 'react';
import useImagePreloader from '../../hooks/useImagePreloader';
import { Collab } from '../../redux/collabs/types';
import { RouterPaths } from '../../shared/router/types';
import { StyledLink } from '../../shared/styles/links';
import Preloader from '../Preloader/Preloader';
import * as S from './CollabsList.style';

type Props = {
  collabs: Collab[];
};

const CollabsList: FC<Props> = ({ collabs }) => {
  const collabsItems = collabs.map(({ image, title, id, price }) => {
    const { imagesPreloaded } = useImagePreloader([image]);
    return (
      <StyledLink to={`${RouterPaths}/${id}`}>
        <S.Collab key={id}>
          {!imagesPreloaded ? (
            <Preloader />
          ) : (
            <S.Thumbnail src={image} width={175} height={175} />
          )}
          <S.Title>{title}</S.Title>
          <S.Price>{price}</S.Price>
        </S.Collab>
      </StyledLink>
    );
  });

  return <S.CollabsList>{collabsItems}</S.CollabsList>;
};

export default CollabsList;
