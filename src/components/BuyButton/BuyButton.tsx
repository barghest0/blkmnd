import { FC } from 'react';
import useActions from '../../hooks/useActions';
import { License } from '../../redux/beats/types';
import { CartProductDetails } from '../../redux/cart/types';
import { ModalsTypes } from '../../redux/modals/types';
import Button from '../Button/Button';
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
        <S.BuyIcon />${price.toFixed(2)}
      </Button>
    </S.BuyButton>
  );
};

export default BuyButton;
