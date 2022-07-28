import { State } from 'reduxStore/types';

const cartProducts = ({ cart: { products } }: State) => products;

const cartDetails = ({
  cart: { productsQuantity, totalCartPrice, cartDiscount },
}: State) => ({
  productsQuantity,
  totalCartPrice,
  cartDiscount,
});

const cartErrors = ({ cart: { errors } }: State) => errors;

const isCartFetching = ({ cart: { isFetching } }: State) => isFetching;

export { cartErrors, cartDetails, cartProducts, isCartFetching };
