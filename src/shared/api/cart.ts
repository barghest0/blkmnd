import { CartProduct } from '../../redux/cart/types';
import { instance } from './instance';

const fetchCart = () => instance.get('cart');

const addProductToCart = (product: CartProduct) =>
  instance.post('cart', product);

const deleteCartProduct = (product: CartProduct) =>
  instance.delete(`cart/${product.id}`);

export { fetchCart, addProductToCart, deleteCartProduct };
