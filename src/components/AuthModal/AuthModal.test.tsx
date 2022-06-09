import { render } from '@testing-library/react';
import AuthModal from './AuthModal';

describe('Auth modal tests', () => {
  test('correct component render', () => {
    const { getByText } = render(<AuthModal />);
    const modal = getByText(/registration/i);
    expect(modal).toBeInTheDocument();
  });
});
