import { mockCollab } from 'test-utils/mocks';
import { render } from 'test-utils/utils';

import ServiceCard from './ServiceCard';

describe('CartProductCard rendering tests', () => {
  test('correct component rendering', () => {
    const { getByText } = render(<ServiceCard service={mockCollab} />);
    const serviceCard = getByText(/beat collabs/i);
    expect(serviceCard).toBeInTheDocument();
  });
});
