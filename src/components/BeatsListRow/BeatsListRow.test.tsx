import ThemeColors from 'shared/styles/theme';
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

describe('BeatsListRow props tests', () => {
  test('expect change color after toggle active', () => {
    const { getByText } = render(<BeatsListRow isActive beat={mockBeat} />);
    const beatRow = getByText(/future mask off type beat/i);
  });
});
