import { Beat, License } from '../beats/types';
import { Collab } from '../collabs/types';
import { SoundKit } from '../soundKits/types';

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
  error: string;
};

export { CartState, CartProduct, CartProductDetails };
