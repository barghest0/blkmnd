import { mockBeat } from 'test-utils/mocks';
import { render } from 'test-utils/utils';

import QueueBeat from './QueueBeat';

describe('QueueBeat rendering tests', () => {
  test('correct component rendering', () => {
    const { getByText } = render(<QueueBeat beat={mockBeat} />);
    const queueBeat = getByText(/future mask off type beat/i);
    expect(queueBeat).toBeInTheDocument();
  });
});
