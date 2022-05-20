import { CartProduct } from '../../redux/cart/types';
import instance from './instanse';

const fetchCart = () => instance.get('cart');

const addProductToCart = (product: CartProduct) =>
  instance.post<{ product: CartProduct }>('cart', product);

const deleteCartProduct = (product: CartProduct) =>
  instance.delete<CartProduct>(`cart/${product.id}`);

export { fetchCart, addProductToCart, deleteCartProduct };
