import { mockComment } from 'test-utils/mocks';
import { render } from 'test-utils/utils';

import Comment from './Comment';

describe('Comment rendering tests', () => {
  test('correct component rendering', () => {
    const { getByText } = render(<Comment comment={mockComment} />);
    const comment = getByText(/someone/i);
    expect(comment).toBeInTheDocument();
  });
});
