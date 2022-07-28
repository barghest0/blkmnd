import { FC } from 'react';

import Image from 'components/Image/Image';
import { RouterPaths } from 'shared/router/types';
import { StyledLink } from 'shared/styles/links';
import { convertPrice } from 'shared/helpers/priceHelper';
import { Service } from 'reduxStore/service-details/types';

import * as S from './ServiceCard.style';

type Props = {
  service: Service;
};

const ServiceCard: FC<Props> = ({ service }) => {
  const { image, title, id, price } = service;

  return (
    <S.ServiceCard>
      <StyledLink to={`${RouterPaths.services}/${id}`}>
        <S.Thumbnail>
          <Image image={image} />
        </S.Thumbnail>
        <S.Title>{title}</S.Title>
        <S.Price>{convertPrice(price)}</S.Price>
      </StyledLink>
    </S.ServiceCard>
  );
};

export default ServiceCard;
