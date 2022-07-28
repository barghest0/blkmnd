import { Beat, License } from 'reduxStore/beats/types';
import { Service } from 'reduxStore/service-details/types';
import { SoundKit } from 'reduxStore/sound-kit-details/types';

type CartProductDetails = Beat | Service | SoundKit;

type CartProduct = {
  id?: number;
  license?: License;
  details: CartProductDetails;
  price: number;
};

type CartState = {
  products: CartProduct[];
  productsQuantity: number;
  totalCartPrice: number;
  cartDiscount: number;
  isFetching: boolean;
  errors: any | null;
};

export { CartState, CartProduct, CartProductDetails };
