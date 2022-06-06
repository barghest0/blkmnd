import { State } from '../types';

const products = (state: State) => state.cart.products;

const details = (state: State) => ({
  productsQuantity: state.cart.quantity,
  totalCartPrice: state.cart.totalPrice,
  cartDiscount: state.cart.discount,
});

const errors = (state: State) => state.cart.errors;

const isFetching = (state: State) => state.cart.isFetching;

export {
  products, details, errors, isFetching,
};
