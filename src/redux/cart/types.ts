import { Beat } from '../beats/types';
import { Collab } from '../collabs/types';
import { SoundKit } from '../soundKits/types';

type CartProduct = Beat | Collab | SoundKit;

type CartState = {
  products: CartProduct[];
  quantity: number;
  totalPrice: number;
  discount: number;
  isFetching: boolean;
  error: string;
};

export { CartState, CartProduct };
