import { FC } from 'react';

import Image from 'components/Image/Image';
import { RouterPaths } from 'shared/router/types';
import { StyledLink } from 'shared/styles/links';
import { convertPrice } from 'shared/helpers/priceHelper';
import { Collab } from 'reduxStore/collabs/types';

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
        <S.Price>{convertPrice(price)}</S.Price>
      </StyledLink>
    </S.CollabCard>
  );
};

export default CollabCard;
