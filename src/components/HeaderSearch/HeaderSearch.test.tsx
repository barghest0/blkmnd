import { render } from 'test-utils/utils';

import HeaderSearch from './HeaderSearch';

describe('HeaderSearch rendering tests', () => {
  test('correct component rendering', () => {
    const isOpen = true;
    const setIsOpen = jest.fn();
    const { getByPlaceholderText } = render(
      <HeaderSearch isOpen={isOpen} setIsOpen={setIsOpen} />,
    );
    const searchField = getByPlaceholderText(/search beats/i);
    expect(searchField).toBeInTheDocument();
  });
});
