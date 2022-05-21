import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { deleteCartProduct } from './actions';
import { addProductToCart, getCart } from './actions';
import { CART_INITIAL_STATE, CART_SLICE_NAME } from './constants';
import { CartProduct } from './types';

const cartSlice = createSlice({
  name: CART_SLICE_NAME,
  initialState: CART_INITIAL_STATE,
  reducers: {},
  extraReducers: {
    [getCart.fulfilled.type]: (state, action: PayloadAction<CartProduct[]>) => {
      state.isFetching = false;
      state.error = '';
      state.products = action.payload;
      state.quantity = action.payload.length;
      state.totalPrice = action.payload.reduce(
        (totalPrice, product) => (totalPrice += product.price),
        0,
      );
    },

    [getCart.pending.type]: state => {
      state.isFetching = true;
    },

    [getCart.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isFetching = false;
      state.error = action.payload;
    },

    [addProductToCart.fulfilled.type]: state => {
      state.isFetching = false;
      state.error = '';
      state.quantity += 1;
    },

    [addProductToCart.pending.type]: state => {
      state.isFetching = true;
    },

    [addProductToCart.rejected.type]: (
      state,
      action: PayloadAction<string>,
    ) => {
      state.isFetching = false;
      state.error = action.payload;
    },

    [deleteCartProduct.fulfilled.type]: state => {
      state.isFetching = false;
      state.error = '';
      state.quantity -= 1;
    },

    [deleteCartProduct.pending.type]: state => {
      state.isFetching = true;
    },

    [deleteCartProduct.rejected.type]: (
      state,
      action: PayloadAction<string>,
    ) => {
      state.isFetching = false;
      state.error = action.payload;
    },
  },
});

export default cartSlice;
