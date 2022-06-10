import { mockBeat } from 'test-utils/mocks';
import { render } from 'test-utils/utils';

import BuyButton from './BuyButton';

describe('BuyButton rendering tests', () => {
  test('correct component rendering', () => {
    const { getByText } = render(<BuyButton price={10} details={mockBeat} />);
    const buyButton = getByText(/10.00/i);
    expect(buyButton).toBeInTheDocument();
  });
});
