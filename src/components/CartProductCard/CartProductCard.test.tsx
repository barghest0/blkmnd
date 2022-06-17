import { mockCartProduct } from 'test-utils/mocks';
import { render } from 'test-utils/utils';

import CartProductCard from './CartProductCard';

describe('CartProductCard rendering tests', () => {
  test('correct component rendering', () => {
    const { getByText } = render(<CartProductCard product={mockCartProduct} />);
    const productCard = getByText(/future mask off type beat/i);
    expect(productCard).toBeInTheDocument();
  });
});
