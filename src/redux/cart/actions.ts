import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  addProductToCart as apiAddProductToCart,
  deleteCartProduct as apiDeleteCartProduct,
  fetchCart,
} from '../../shared/api/cart';
import {
  ADD_PRODUCT_TO_CART_NAME,
  DELETE_CART_PRODUCT_NAME,
  GET_CART_NAME,
} from './constants';
import { CartProduct } from './types';

const getCart = createAsyncThunk(GET_CART_NAME, async (_, thunkApi) => {
  try {
    const response = await fetchCart();
    return response.data;
  } catch (e) {
    thunkApi.rejectWithValue(e);
  }
});

const addProductToCart = createAsyncThunk(
  ADD_PRODUCT_TO_CART_NAME,
  async (product: CartProduct, thunkApi) => {
    try {
      const response = await apiAddProductToCart(product);
      console.log(response.data);
    } catch (e) {
      thunkApi.rejectWithValue(e);
    }
  },
);

const deleteCartProduct = createAsyncThunk(
  DELETE_CART_PRODUCT_NAME,
  async (product: CartProduct, thunkApi) => {
    try {
      await apiDeleteCartProduct(product);
    } catch (e) {
      thunkApi.rejectWithValue(e);
    }
  },
);

export { getCart, addProductToCart, deleteCartProduct };
