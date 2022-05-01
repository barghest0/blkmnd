import { FC } from 'react';
import Button from '../Button/Button';
import * as S from './AddToCardButton.style';

type Props = {
  price: number;
};

const AddToCardButton: FC<Props> = ({ price }) => {
  return (
    <Button>
      <S.AddToCartIcon />${price.toFixed(2)}
    </Button>
  );
};

export default AddToCardButton;
