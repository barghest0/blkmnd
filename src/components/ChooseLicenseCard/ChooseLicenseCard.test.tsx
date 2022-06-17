import { mockBeat, mockLicense } from 'test-utils/mocks';
import { render } from 'test-utils/utils';

import ChooseLicenseCard from './ChooseLicenseCard';

describe('ChooseLicenseCard rendering tests', () => {
  test('correct component rendering', () => {
    const { getByText } = render(
      <ChooseLicenseCard beat={mockBeat} license={mockLicense} />,
    );
    const chooseLicenseCard = getByText(/basic/i);
    expect(chooseLicenseCard).toBeInTheDocument();
  });
});
