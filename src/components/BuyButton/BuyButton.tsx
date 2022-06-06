import { FC } from 'react';

import Button from 'components/Button/Button';
import useActions from 'hooks/useActions';
import { License } from 'reduxStore/beats/types';
import { CartProductDetails } from 'reduxStore/cart/types';
import { ModalsTypes } from 'reduxStore/modals/types';

import * as S from './BuyButton.style';

type Props = {
  price: number;
  details: CartProductDetails;
  license?: License;
};

const BuyButton: FC<Props> = ({ price, details, license }) => {
  const { addProductToCart, setModalVisability } = useActions();

  const product = {
    license,
    details,
    price: license ? license.price : details?.price,
  };

  const onBuyButtonClick = () => {
    addProductToCart(product);
    setModalVisability({ visability: false, modalType: ModalsTypes.buy });
  };

  return (
    <S.BuyButton onClick={onBuyButtonClick}>
      <Button>
        <S.BuyIcon />
        $
        {price.toFixed(2)}
      </Button>
    </S.BuyButton>
  );
};

export default BuyButton;
