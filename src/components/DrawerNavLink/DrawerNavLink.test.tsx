import { render } from 'test-utils/utils';

import DrawerNavLink from './DrawerNavLink';

describe('DrawerNavLink rendering tests', () => {
  test('correct component rendering', () => {
    const { getByText } = render(
      <DrawerNavLink path="/mock-address">link</DrawerNavLink>,
    );
    const navLink = getByText(/link/i);
    expect(navLink).toBeInTheDocument();
  });
});
