import { FC } from 'react';

import Button from 'components/Button/Button';
import { Beat } from 'reduxStore/beats/types';
import { ModalsTypes } from 'reduxStore/modals/types';
import useActions from 'hooks/useActions';

import * as S from './ChooseLicenseButton.style';

type Props = {
  price: number;
  beat: Beat;
};

const ChooseLicenseButton: FC<Props> = ({ price, beat }) => {
  const { setModalVisability, getBeat } = useActions();

  const onBuyButtonClick = () => {
    setModalVisability({ visability: true, modalType: ModalsTypes.buy });
    getBeat(beat.id);
  };

  return (
    <S.ChooseLicenseButton onClick={onBuyButtonClick}>
      <Button>
        <S.BuyIcon />${price.toFixed(2)}
      </Button>
    </S.ChooseLicenseButton>
  );
};

export default ChooseLicenseButton;
