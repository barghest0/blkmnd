import { FC } from 'react';
import CloseIcon from '@mui/icons-material/Close';

import useActions from 'hooks/useActions';
import { CartProduct } from 'reduxStore/cart/types';
import Preloader from 'components/Preloader/Preloader';

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
      {!product.details ? (
        <Preloader />
      ) : (
        <>
          <S.Thumbnail src={product.details.image} />
          <S.Info>
            <S.Title>{product.details.title}</S.Title>
            <S.Type>{product.details.type}</S.Type>
          </S.Info>
          <S.Price>
            $
{product.license ? product.license.price : product.details.price}
          </S.Price>
          <S.License />
          <S.Delete onClick={onDeleteButtonClick}>
            <CloseIcon />
          </S.Delete>
        </>
      )}
    </S.CardProductCard>
  );
};

export default CartProductCard;
