import { mockBeat } from 'test-utils/mocks';
import { render } from 'test-utils/utils';

import DurationSlider from './DurationSlider';

describe('DurationSlider rendering tests', () => {
  test('correct component rendering', () => {
    const { container } = render(<DurationSlider currentBeat={mockBeat} />);
    const durationSlider = container.querySelector('.MuiSlider-track');
    expect(durationSlider).toBeInTheDocument();
  });
});
