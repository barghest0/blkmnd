import { render } from 'test-utils/utils';

import Button from './Button';

describe('Button rendering tests', () => {
  test('correct component rendering', () => {
    const { getByText } = render(<Button>button</Button>);
    const button = getByText(/button/i);
    expect(button).toBeInTheDocument();
  });
});
