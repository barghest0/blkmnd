import { mockBeat } from 'test-utils/mocks';
import { render } from 'test-utils/utils';

import BeatsList from './BeatsList';

describe('BeatsList rendering tests', () => {
  test('correct list header rendering', () => {
    const { getByText } = render(<BeatsList beats={[mockBeat]} />);
    const headerColumn = getByText(/title/i);
    expect(headerColumn).toBeInTheDocument();
  });

  test('correct list row rendering', () => {
    const { getByText } = render(<BeatsList beats={[mockBeat]} />);
    const beat = getByText(/future mask off type beat/i);
    expect(beat).toBeInTheDocument();
  });
});
