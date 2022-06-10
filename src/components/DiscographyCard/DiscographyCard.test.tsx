import { mockBeat } from 'test-utils/mocks';
import { render } from 'test-utils/utils';

import DiscographyCard from './DiscographyCard';

describe('DiscographyCard rendering tests', () => {
  test('correct component rendering', () => {
    const { getByText } = render(<DiscographyCard beat={mockBeat} />);
    const discographyCard = getByText(/future mask off type beat/i);
    expect(discographyCard).toBeInTheDocument();
  });
});
