import { render } from 'test-utils/utils';

import Header from './Header';

describe('Header rendering tests', () => {
  test('correct component rendering', () => {
    const { getByText } = render(<Header />);
    const header = getByText(/log in/i);
    expect(header).toBeInTheDocument();
  });
});
