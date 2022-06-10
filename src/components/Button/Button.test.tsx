import { render } from '@testing-library/react';
import Button from './Button';

describe('Button tests', () => {
  test('correct render button', () => {
    const { getByText } = render(<Button>button</Button>);
    const button = getByText(/button/i);
    expect(button).toBeInTheDocument();
  });
});
