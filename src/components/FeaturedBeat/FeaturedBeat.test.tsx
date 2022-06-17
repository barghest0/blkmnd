import { mockBeat } from 'test-utils/mocks';
import { render } from 'test-utils/utils';

import FeaturedBeat from './FeaturedBeat';

describe('FeaturedBeat rendering tests', () => {
  test('correct component rendering', () => {
    const { getByText } = render(<FeaturedBeat beat={mockBeat} />);
    const featuredBeat = getByText(/future mask off type beat/i);
    expect(featuredBeat).toBeInTheDocument();
  });
});
