import { mockSoundKit } from 'test-utils/mocks';
import { render } from 'test-utils/utils';

import SoundKitCard from './SoundKitCard';

describe('SoundKitCard rendering tests', () => {
  test('correct component rendering', () => {
    const { getByText } = render(<SoundKitCard soundKit={mockSoundKit} />);
    const soundKitCard = getByText(/black november midi melody pack/i);
    expect(soundKitCard).toBeInTheDocument();
  });
});
