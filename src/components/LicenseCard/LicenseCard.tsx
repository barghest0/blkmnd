import { FC } from 'react';

import * as S from './LicenseCard.style';

import { License } from '../../redux/beats/types';
import Button from '../Button/Button';
import useActions from '../../hooks/useActions';
import { ModalsTypes } from '../../redux/modals/types';

type Props = {
  license: License;
};

const LicenseCard: FC<Props> = ({ license }) => {
  const { id, name, price } = license;
  const { setModalVisability, getLicense } = useActions();

  const onDetailsButtonClick = () => {
    setModalVisability({ visability: true, modalType: ModalsTypes.license });
    getLicense(id);
  };

  return (
    <S.LicenseCard>
      <S.Title>{name} License</S.Title>
      <S.Price>${price.toFixed(2)}</S.Price>
      <S.Details onClick={onDetailsButtonClick}>
        <Button>Read license</Button>
      </S.Details>
    </S.LicenseCard>
  );
};

export default LicenseCard;
