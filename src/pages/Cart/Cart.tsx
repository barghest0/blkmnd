import { useEffect } from 'react';
import { useFormik } from 'formik';
import CartProductCard from '../../components/CartProductCard/CartProductCard';
import useTypedSelector from '../../hooks/redux/useTypedDispatch';
import useActions from '../../hooks/useActions';
import * as S from './Cart.style';
import { Checkbox, FormControlLabel, TextField } from '@mui/material';
import { StyledLink } from '../../shared/styles/links';
import { RouterPaths } from '../../shared/router/types';
import Button from '../../components/Button/Button';

type PaymentValues = {
  hasCoupon: boolean;
  coupon: string;
};

const Cart = () => {
  const { getCart } = useActions();
  const { products, quantity, totalPrice, discount } = useTypedSelector(
    state => state.cart,
  );

  useEffect(() => {
    getCart();
  }, [quantity]);

  const productsCards = products.map(product => (
    <CartProductCard product={product} key={product.id} />
  ));

  const initialPaymentValues = {
    hasCoupon: false,
    coupon: '',
  };

  const onPaymentSubmit = (values: PaymentValues) => {
    console.log(values);
  };

  const formik = useFormik({
    initialValues: initialPaymentValues,
    onSubmit: onPaymentSubmit,
  });

  return (
    <S.Cart>
      <S.Container>
        <S.Title>Cart</S.Title>

        <S.Content>
          <S.Products>
            <S.ProductsHeader>
              <S.Product>Product</S.Product>
              <S.Price>Price</S.Price>
            </S.ProductsHeader>
            <S.ProductsCards>{productsCards}</S.ProductsCards>
          </S.Products>
          <S.Payment onSubmit={formik.handleSubmit}>
            <S.Coupon>
              <FormControlLabel
                control={
                  <Checkbox onChange={formik.handleChange} name="hasCoupon" />
                }
                label="I have a Coupon Code"
              />
              {formik.values.hasCoupon && (
                <TextField
                  label="Coupon"
                  name="coupon"
                  onChange={formik.handleChange}
                  variant="standard"
                />
              )}
            </S.Coupon>
            <S.CashSettlement>
              <S.Settlement>
                <S.SettlementText>Price</S.SettlementText>
                <S.SettlementText>${totalPrice}</S.SettlementText>
              </S.Settlement>
              <S.Settlement>
                <S.SettlementText>Discount</S.SettlementText>
                <S.SettlementText>- ${discount}</S.SettlementText>
              </S.Settlement>
              <S.Settlement>
                <S.TotalText>Total</S.TotalText>
                <S.TotalText>${totalPrice - discount}</S.TotalText>
              </S.Settlement>
            </S.CashSettlement>
            <S.UserEmail>
              You are checking out as you@mail.ru. Not you?
              <StyledLink to={RouterPaths.landing}> Sign out</StyledLink>
            </S.UserEmail>
            <S.Submit>
              <Button type="submit">Pay purchases</Button>
            </S.Submit>
          </S.Payment>
        </S.Content>
      </S.Container>
    </S.Cart>
  );
};

export default Cart;
