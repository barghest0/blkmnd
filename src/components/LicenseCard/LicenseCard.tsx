import { FC } from 'react';

import * as S from './LicenseCard.style';

import { License } from '../../redux/beat/types';
import Button from '../Button/Button';

type Props = {
  license: License;
};
const LicenseCard: FC<Props> = ({ license }) => {
  const { name, price } = license;

  return (
    <S.LicenseCard>
      <S.Title>{name} License</S.Title>
      <S.Price>${price.toFixed(2)}</S.Price>
      <S.Details>
        <Button>Read license</Button>
      </S.Details>
    </S.LicenseCard>
  );
};

export default LicenseCard;
