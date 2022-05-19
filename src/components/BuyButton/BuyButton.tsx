import { FC } from 'react';
import useActions from '../../hooks/useActions';
import { ModalsTypes } from '../../redux/modals/types';
import Button from '../Button/Button';
import * as S from './BuyButton.style';

type Props = {
  price: number;
  beatId: number;
};

const BuyButton: FC<Props> = ({ price, beatId }) => {
  const { setModalVisability, getBeat } = useActions();

  const onBuyButtonClick = () => {
    setModalVisability({ visability: true, modalType: ModalsTypes.buy });
    getBeat(beatId);
  };

  return (
    <S.BuyButton onClick={onBuyButtonClick}>
      <Button>
        <S.BuyIcon />${price.toFixed(2)}
      </Button>
    </S.BuyButton>
  );
};

export default BuyButton;
