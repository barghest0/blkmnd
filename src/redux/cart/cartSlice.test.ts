import { mockCartProduct } from 'test-utils/mocks';

import { addProductToCart, deleteCartProduct, getCart } from './actions';
import cartSlice from './cartSlice';
import { CART_INITIAL_STATE, CART_SLICE_NAME } from './constants';

const state = cartSlice.getInitialState();

describe('cartSlice state tests', () => {
  test('expect set correct initial state', () => {
    expect(state).toEqual(CART_INITIAL_STATE);
  });
  test('expect set correct slice name', () => {
    expect(cartSlice.name).toEqual(CART_SLICE_NAME);
  });
});

describe('correct cartSlice get cart with mock action payload', () => {
  test('expect correct fulfilled get cart', () => {
    const action = { type: getCart.fulfilled.type, payload: [mockCartProduct] };
    const newState = cartSlice.reducer(state, action);
    expect(newState).toEqual({
      ...state,
      products: [mockCartProduct],
      quantity: 1,
      totalPrice: mockCartProduct.price,
    });
  });

  test('expect set isFetching during get cart pending', () => {
    const action = { type: getCart.pending.type };
    const newState = cartSlice.reducer(state, action);
    expect(newState).toEqual({
      ...state,
      isFetching: true,
    });
  });

  test('expect set errors after rejected get cart', () => {
    const action = {
      type: getCart.rejected.type,
      payload: 'error',
    };
    const newState = cartSlice.reducer(state, action);
    expect(newState).toEqual({
      ...state,
      errors: 'error',
    });
  });
});

describe('correct cartSlice add product to cart with mock action payload', () => {
  test('expect correct fulfilled add product', () => {
    const action = {
      type: addProductToCart.fulfilled.type,
      payload: mockCartProduct,
    };
    const newState = cartSlice.reducer(state, action);
    expect(newState).toEqual({
      ...state,
      products: [mockCartProduct],
      quantity: 1,
      totalPrice: mockCartProduct.price,
    });
  });

  test('expect set isFetching during add product pending', () => {
    const action = { type: addProductToCart.pending.type };
    const newState = cartSlice.reducer(state, action);
    expect(newState).toEqual({
      ...state,
      isFetching: true,
    });
  });

  test('expect set errors after rejected add product', () => {
    const action = {
      type: addProductToCart.rejected.type,
      payload: 'error',
    };
    const newState = cartSlice.reducer(state, action);
    expect(newState).toEqual({
      ...state,
      errors: 'error',
    });
  });
});

describe('correct cartSlice delete product to cart with mock action payload', () => {
  test('expect correct fulfilled delete product', () => {
    const addAction = {
      type: addProductToCart.fulfilled.type,
      payload: mockCartProduct,
    };
    const stateWithProduct = cartSlice.reducer(state, addAction);

    const action = {
      type: deleteCartProduct.fulfilled.type,
      meta: {
        arg: mockCartProduct,
      },
    };
    const newState = cartSlice.reducer(stateWithProduct, action);
    expect(newState).toEqual({
      ...state,
      products: [],
      quantity: 0,
      totalPrice: 0,
    });
  });

  test('expect set isFetching during delete product pending', () => {
    const action = { type: deleteCartProduct.pending.type };
    const newState = cartSlice.reducer(state, action);
    expect(newState).toEqual({
      ...state,
      isFetching: true,
    });
  });

  test('expect set errors after rejected delete product', () => {
    const action = {
      type: deleteCartProduct.rejected.type,
      payload: 'error',
    };
    const newState = cartSlice.reducer(state, action);
    expect(newState).toEqual({
      ...state,
      errors: 'error',
    });
  });
});
