import { Beat, License } from 'reduxStore/beats/types';
import { Collab } from 'reduxStore/collabs/types';
import { SoundKit } from 'reduxStore/soundKits/types';

type CartProductDetails = Beat | Collab | SoundKit;

type CartProduct = {
  id?: number;
  license?: License;
  details: CartProductDetails;
  price: number;
};

type CartState = {
  products: CartProduct[];
  quantity: number;
  totalPrice: number;
  discount: number;
  isFetching: boolean;
  errors: string;
};

export { CartState, CartProduct, CartProductDetails };
