import ThemeColors from 'shared/styles/theme';
import { render } from 'test-utils/utils';

import Button from './Button';

describe('Button rendering tests', () => {
  test('correct component rendering', () => {
    const { getByText } = render(<Button>button</Button>);
    const button = getByText(/button/i);
    expect(button).toBeInTheDocument();
  });
});

describe('Button props tests', () => {
  test('expect to have light background', () => {
    const { getByText } = render(<Button hasBackground>button</Button>);
    const button = getByText(/button/i);
    expect(button).toHaveStyle(`background-color:${ThemeColors.secondColor}`);
  });

  test('expect to haven`t background', () => {
    const { getByText } = render(<Button hasBackground={false}>button</Button>);
    const button = getByText(/button/i);
    expect(button).toHaveStyle('background-color:transparent');
  });
});
