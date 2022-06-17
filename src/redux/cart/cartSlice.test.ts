import { mockDispatch } from 'test-utils/utils';
import { waitFor } from '@testing-library/react';

import { mockCartProduct } from 'test-utils/mocks';
import * as cartApi from 'shared/api/cart';

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

jest.mock('shared/api/cart');
const mockCartApi = cartApi as jest.Mocked<typeof cartApi>;

describe('resolved cart actions with async thunk', () => {
  test('expect resolved get all cart products response', async () => {
    const mockData = {
      data: [mockCartProduct],
    };
    mockCartApi.fetchCart.mockResolvedValueOnce(mockData);
    const cart = await mockDispatch(getCart());

    await waitFor(() => {
      expect(cart.payload).toEqual([mockCartProduct]);
      expect(mockCartApi.fetchCart).toBeCalled();
    });
  });

  test('expect resolved add cart product response', async () => {
    const mockData = {
      data: mockCartProduct,
    };
    mockCartApi.addProductToCart.mockResolvedValueOnce(mockData);
    const product = await mockDispatch(addProductToCart(mockCartProduct));

    await waitFor(() => {
      expect(product.payload).toEqual(mockCartProduct);
      expect(mockCartApi.addProductToCart).toBeCalled();
    });
  });

  test('expect resolved delete cart product response', async () => {
    const mockData = {
      meta: {
        arg: mockCartProduct,
      },
    };
    mockCartApi.deleteCartProduct.mockResolvedValueOnce(mockData);
    const product = await mockDispatch(deleteCartProduct(mockCartProduct));

    await waitFor(() => {
      expect(product.meta.arg).toEqual(mockCartProduct);
      expect(mockCartApi.deleteCartProduct).toBeCalledWith(mockCartProduct);
    });
  });
});

describe('rejected cart actions with async thunk', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('expect rejected get cart products response', async () => {
    const mockData = {
      error: 'error',
    };
    mockCartApi.fetchCart.mockRejectedValue(mockData);
    const rejectedCart = await mockDispatch(getCart());

    await waitFor(() => {
      expect(rejectedCart.payload).toEqual(mockData);
    });
  });

  test('expect rejected add cart product response', async () => {
    const mockData = {
      error: 'error',
    };
    mockCartApi.addProductToCart.mockRejectedValue(mockData);
    const rejectedProduct = await mockDispatch(
      addProductToCart(mockCartProduct),
    );

    await waitFor(() => {
      expect(rejectedProduct.payload).toEqual(mockData);
    });
  });

  test('expect rejected delete cart product response', async () => {
    const mockData = {
      error: 'error',
    };
    mockCartApi.deleteCartProduct.mockRejectedValue(mockData);
    const rejectedProduct = await mockDispatch(
      deleteCartProduct(mockCartProduct),
    );

    await waitFor(() => {
      expect(rejectedProduct.payload).toEqual(mockData);
    });
  });
});
