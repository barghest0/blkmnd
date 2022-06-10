import { mockBeat } from 'test-utils/mocks';
import { render } from 'test-utils/utils';

import ChooseLicenseButton from './ChooseLicenseButton';

describe('ChooseLicenseButton rendering tests', () => {
  test('correct component rendering', () => {
    const { getByText } = render(
      <ChooseLicenseButton beat={mockBeat} price={10} />,
    );
    const chooseLicenseButton = getByText(/10.00/i);
    expect(chooseLicenseButton).toBeInTheDocument();
  });
});
