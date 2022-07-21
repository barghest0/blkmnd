import { mockCollab } from 'test-utils/mocks';
import { render } from 'test-utils/utils';

import CollabCard from './CollabCard';

describe('CartProductCard rendering tests', () => {
  test('correct component rendering', () => {
    const { getByText } = render(<CollabCard collab={mockCollab} />);
    const collabCard = getByText(/beat collabs/i);
    expect(collabCard).toBeInTheDocument();
  });
});
