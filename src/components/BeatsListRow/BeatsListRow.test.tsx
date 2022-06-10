import { mockBeat } from 'test-utils/mocks';
import { render } from 'test-utils/utils';

import BeatsListRow from './BeatsListRow';

describe('BeatsListRow rendering tests', () => {
  test('correct component rendering', () => {
    const { getByText } = render(
      <BeatsListRow isActive={false} beat={mockBeat} />,
    );
    const beatRow = getByText(/future mask off type beat/i);
    expect(beatRow).toBeInTheDocument();
  });
});
