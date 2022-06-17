import { render } from 'test-utils/utils';

import TextField from './TextField';

describe('TextField rendering tests', () => {
  test('correct component rendering', () => {
    const name = 'mock-name';
    const value = 'mock-value';
    const placeholder = 'placeholder-text';
    const onTextFieldChange = jest.fn();
    const { getByPlaceholderText } = render(
      <TextField
        name={name}
        onChange={onTextFieldChange}
        value={value}
        placeholder={placeholder}
      />,
    );
    const textField = getByPlaceholderText(/placeholder-text/i);
    expect(textField).toBeInTheDocument();
  });
});
