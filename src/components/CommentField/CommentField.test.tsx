import { render } from 'test-utils/utils';

import CommentField from './CommentField';

describe('CommentField rendering tests', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('correct component rendering', () => {
    const onCommentSubmit = jest.fn();
    const { getByPlaceholderText } = render(
      <CommentField onSubmit={onCommentSubmit} />,
    );
    const comment = getByPlaceholderText(/write a comment.../i);
    expect(comment).toBeInTheDocument();
  });
});
