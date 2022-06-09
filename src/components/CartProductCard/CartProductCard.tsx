import { FC } from 'react';
import CloseIcon from '@mui/icons-material/Close';

import Preloader from 'components/Preloader/Preloader';
import useActions from 'hooks/useActions';
import { CartProduct } from 'reduxStore/cart/types';
import { convertPrice } from 'shared/helpers/priceHelper';

import * as S from './CartProductCard.style';

type Props = {
  product: CartProduct;
};

const CartProductCard: FC<Props> = ({ product }) => {
  const { deleteCartProduct } = useActions();

  const onDeleteButtonClick = () => {
    deleteCartProduct(product);
  };

  const price = product.license ? product.license.price : product.details.price;

  return (
    <S.CardProductCard>
      {!product.details ? (
        <Preloader />
      ) : (
        <S.Details>
          <S.Thumbnail src={product.details.image} />
          <S.Info>
            <S.Title>{product.details.title}</S.Title>
            <S.Type>{product.details.type}</S.Type>
          </S.Info>
          <S.Price>{convertPrice(price)}</S.Price>
          <S.License />
          <S.Delete onClick={onDeleteButtonClick}>
            <CloseIcon />
          </S.Delete>
        </S.Details>
      )}
    </S.CardProductCard>
  );
};

export default CartProductCard;
