import { FC } from 'react';
import useActions from '../../hooks/useActions';
import { CartProduct } from '../../redux/cart/types';
import Button from '../Button/Button';
import * as S from './BuyButton.style';

type Props = {
  price: number;
  product: CartProduct;
};

const BuyButton: FC<Props> = ({ price, product }) => {
  const { addProductToCart } = useActions();
  const onBuyButtonClick = () => {
    addProductToCart(product);
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
