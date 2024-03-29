import { FC } from 'react';

import Button from 'components/Button/Button';
import { Beat } from 'reduxStore/beats/types';
import { ModalsTypes } from 'reduxStore/modals/types';
import useActions from 'hooks/useActions';
import { convertPrice } from 'shared/helpers/priceHelper';

import * as S from './ChooseLicenseButton.style';

type Props = {
  price: number;
  beat: Beat;
};

const ChooseLicenseButton: FC<Props> = ({ price, beat }) => {
  const { setModalVisability, getModalBeat } = useActions();

  const onBuyButtonClick = () => {
    setModalVisability({ visability: true, modalType: ModalsTypes.buy });
    getModalBeat(beat.id);
  };

  return (
    <S.ChooseLicenseButton onClick={onBuyButtonClick}>
      <Button>
        <S.BuyIcon />
        <S.Price>{convertPrice(price)}</S.Price>
      </Button>
    </S.ChooseLicenseButton>
  );
};

export default ChooseLicenseButton;
