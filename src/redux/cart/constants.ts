import { CartState } from './types';

const CART_SLICE_NAME = 'cart';

const CART_INITIAL_STATE: CartState = {
  products: [],
  quantity: 0,
  totalPrice: 0,
  discount: 0,
  isFetching: false,
  errors: '',
};

const GET_CART_NAME = 'cart/all';
const ADD_PRODUCT_TO_CART_NAME = 'cart/add';
const DELETE_CART_PRODUCT_NAME = 'cart/delete';

export {
  CART_SLICE_NAME,
  CART_INITIAL_STATE,
  GET_CART_NAME,
  ADD_PRODUCT_TO_CART_NAME,
  DELETE_CART_PRODUCT_NAME,
};
