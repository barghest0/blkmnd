import { mockLicense } from 'test-utils/mocks';
import { render } from 'test-utils/utils';

import LicenseCard from './LicenseCard';

describe('LicenseCard rendering tests', () => {
  test('correct component rendering', () => {
    const { getByText } = render(<LicenseCard license={mockLicense} />);
    const licenseCard = getByText(/33.00/i);
    expect(licenseCard).toBeInTheDocument();
  });
});
