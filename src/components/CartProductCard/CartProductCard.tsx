import { FC } from 'react';

import CloseIcon from '@mui/icons-material/Close';

import useActions from '../../hooks/useActions';
import { CartProduct } from '../../redux/cart/types';
import Button from '../Button/Button';
import * as S from './CartProductCard.style';

type Props = {
  product: CartProduct;
};

const CartProductCard: FC<Props> = ({ product }) => {
  const { deleteCartProduct } = useActions();
  const { price, title, type, image } = product;

  const onDeleteButtonClick = () => {
    deleteCartProduct(product);
  };

  return (
    <S.CardProductCard>
      <S.Thumbnail src={image} />
      <S.Info>
        <S.Title>{title}</S.Title>
        <S.Type>{type}</S.Type>
      </S.Info>
      <S.Price>${price}</S.Price>
      <S.License></S.License>
      <S.Delete onClick={onDeleteButtonClick}>
        <CloseIcon />
      </S.Delete>
    </S.CardProductCard>
  );
};

export default CartProductCard;
