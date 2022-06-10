import { render } from 'test-utils/utils';

import VolumeSlider from './VolumeSlider';

describe('VolumeSlider rendering tests', () => {
  test('correct component rendering', () => {
    const { container } = render(<VolumeSlider />);
    const volumeSlider = container.querySelector('.MuiSlider-track');
    expect(volumeSlider).toBeInTheDocument();
  });
});
