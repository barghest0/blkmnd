import { FC } from 'react';

import Button from 'components/Button/Button';
import useActions from 'hooks/useActions';
import { ModalsTypes } from 'reduxStore/modals/types';
import { License } from 'reduxStore/beats/types';
import { convertPrice } from 'shared/helpers/priceHelper';

import * as S from './LicenseCard.style';

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
      <S.Title>
        <S.LicenseName>{name}</S.LicenseName>
        License
      </S.Title>
      <S.Price>{convertPrice(price)}</S.Price>
      <S.Details onClick={onDetailsButtonClick}>
        <Button>Read license</Button>
      </S.Details>
    </S.LicenseCard>
  );
};

export default LicenseCard;
