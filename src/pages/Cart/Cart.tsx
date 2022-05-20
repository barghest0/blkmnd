import { useEffect } from 'react';
import CartProductCard from '../../components/CartProductCard/CartProductCard';
import useTypedSelector from '../../hooks/redux/useTypedDispatch';
import useActions from '../../hooks/useActions';
import * as S from './Cart.style';

const Cart = () => {
  const { getCart } = useActions();
  const { products, quantity } = useTypedSelector(state => state.cart);

  useEffect(() => {
    getCart();
  }, [quantity]);

  const productsCards = products.map(product => (
    <CartProductCard product={product} key={product.id} />
  ));

  return (
    <S.Cart>
      <S.Container>
        <S.Title>Cart</S.Title>
        <S.ProductsCards>{productsCards}</S.ProductsCards>
      </S.Container>
    </S.Cart>
  );
};

export default Cart;
