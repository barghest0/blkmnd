import { render } from 'test-utils/utils';

import HeaderNavLink from './HeaderNavLink';

describe('HeaderNavLink rendering tests', () => {
  test('correct component rendering', () => {
    const { getByText } = render(
      <HeaderNavLink path="mock-address">link</HeaderNavLink>,
    );
    const navLink = getByText(/link/i);
    expect(navLink).toBeInTheDocument();
  });
});
