import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { deleteCartProduct, addProductToCart, getCart } from './actions';
import { CART_INITIAL_STATE, CART_SLICE_NAME } from './constants';
import { CartProduct } from './types';

const cart = createSlice({
  name: CART_SLICE_NAME,
  initialState: CART_INITIAL_STATE,
  reducers: {},
  extraReducers: {
    [getCart.fulfilled.type]: (state, action: PayloadAction<CartProduct[]>) => {
      state.isFetching = false;
      state.errors = null;
      state.products = action.payload;
      state.productsQuantity = action.payload.length;
      state.totalCartPrice = action.payload.reduce(
        (totalPrice, product) => (totalPrice += product.price),
        0,
      );
    },

    [getCart.pending.type]: (state) => {
      state.isFetching = true;
    },

    [getCart.rejected.type]: (state, action: PayloadAction<any>) => {
      state.isFetching = false;
      state.errors = action.payload;
    },

    [addProductToCart.fulfilled.type]: (
      state,
      action: PayloadAction<CartProduct>,
    ) => {
      state.isFetching = false;
      state.errors = null;
      state.productsQuantity += 1;
      state.products.push(action.payload);
      state.totalCartPrice += action.payload.price;
    },

    [addProductToCart.pending.type]: (state) => {
      state.isFetching = true;
    },

    [addProductToCart.rejected.type]: (
      state,
      action: PayloadAction<string>,
    ) => {
      state.isFetching = false;
      state.errors = action.payload;
    },

    [deleteCartProduct.fulfilled.type]: (
      state,
      action: PayloadAction<CartProduct, string, CartProduct>,
    ) => {
      const deletedProduct = action.meta.arg;

      state.isFetching = false;
      state.errors = null;
      state.products = state.products.filter(
        (product) => product.id !== deletedProduct.id,
      );
      state.totalCartPrice -= deletedProduct.price;
      state.productsQuantity -= 1;
    },

    [deleteCartProduct.pending.type]: (state) => {
      state.isFetching = true;
    },

    [deleteCartProduct.rejected.type]: (state, action: PayloadAction<any>) => {
      state.isFetching = false;
      state.errors = action.payload;
    },
  },
});

export default cart;
