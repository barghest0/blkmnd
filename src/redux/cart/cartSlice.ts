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
    },

    [getCart.pending.type]: state => {
      state.isFetching = true;
    },

    [getCart.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isFetching = false;
      state.error = action.payload;
    },

    [addProductToCart.fulfilled.type]: (
      state,
      action: PayloadAction<CartProduct>,
    ) => {
      state.isFetching = false;
      state.error = '';
      state.products.push(action.payload);
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

    [deleteCartProduct.fulfilled.type]: (
      state,
      action: PayloadAction<CartProduct>,
    ) => {
      state.isFetching = false;
      state.error = '';
      state.products = state.products.filter(
        product => product.id !== action.payload.id,
      );
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
