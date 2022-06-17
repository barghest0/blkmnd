import { mockTag } from 'test-utils/mocks';
import { render } from 'test-utils/utils';

import TagLink from './TagLink';

describe('TagLink rendering tests', () => {
  test('correct component rendering', () => {
    const { getByText } = render(<TagLink tag={mockTag} />);
    const tagLink = getByText(/future/i);
    expect(tagLink).toBeInTheDocument();
  });
});
