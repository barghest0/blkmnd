import { FC } from 'react';
import useActions from '../../hooks/useActions';
import { CartProduct } from '../../redux/cart/types';
import Button from '../Button/Button';
import * as S from './CartProductCard.style';

type Props = {
  product: CartProduct;
};

const CartProductCard: FC<Props> = ({ product }) => {
  const { deleteCartProduct } = useActions();

  const onDeleteButtonClick = () => {
    deleteCartProduct(product);
  };

  return (
    <S.CardProductCard>
      <S.Delete onClick={onDeleteButtonClick}>
        <Button>Delete</Button>
      </S.Delete>
    </S.CardProductCard>
  );
};

export default CartProductCard;
