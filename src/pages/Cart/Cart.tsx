import { useEffect } from 'react';
import { useFormik } from 'formik';
import { Checkbox, FormControlLabel, TextField } from '@mui/material';

import CartProductCard from 'components/CartProductCard/CartProductCard';
import Button from 'components/Button/Button';
import useTypedSelector from 'hooks/redux/useTypedDispatch';
import useActions from 'hooks/useActions';
import { StyledLink } from 'shared/styles/links';
import { RouterPaths } from 'shared/router/types';
import * as cartSelectors from 'reduxStore/cart/selectors';

import * as S from './Cart.style';

type PaymentValues = {
  hasCoupon: boolean;
  coupon: string;
};

const Cart = () => {
  const { getCart } = useActions();
  const products = useTypedSelector(cartSelectors.products);
  const { productsQuantity, totalCartPrice, cartDiscount } = useTypedSelector(
    cartSelectors.details,
  );

  useEffect(() => {
    getCart();
  }, [productsQuantity]);

  const productsCards = products.map((product) => (
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
                <S.SettlementText>${totalCartPrice}</S.SettlementText>
              </S.Settlement>
              <S.Settlement>
                <S.SettlementText>Discount</S.SettlementText>
                <S.SettlementText>- ${cartDiscount}</S.SettlementText>
              </S.Settlement>
              <S.Settlement>
                <S.TotalText>Total</S.TotalText>
                <S.TotalText>${totalCartPrice - cartDiscount}</S.TotalText>
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
