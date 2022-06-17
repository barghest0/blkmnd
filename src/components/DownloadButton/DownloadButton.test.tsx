import { mockBeat } from 'test-utils/mocks';
import { render } from 'test-utils/utils';

import DownloadButton from './DownloadButton';

describe('DownloadButton rendering tests', () => {
  test('correct component rendering', () => {
    const { container } = render(<DownloadButton beatId={mockBeat.id} />);
    const downloadIcon = container.querySelector('.MuiSvgIcon-root');
    expect(downloadIcon).toBeInTheDocument();
  });
});
