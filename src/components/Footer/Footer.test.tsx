import { render } from 'test-utils/utils';

import Footer from './Footer';

describe('Footer rendering tests', () => {
  test('correct component rendering', () => {
    const { getByText } = render(<Footer />);
    const footer = getByText(/download free beats and free drum kits today/i);
    expect(footer).toBeInTheDocument();
  });
});
