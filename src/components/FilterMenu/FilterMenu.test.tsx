import { render } from 'test-utils/utils';

import FilterMenu from './FilterMenu';

describe('FilterMenu rendering tests', () => {
  test('correct component rendering', () => {
    const value = 'value-option';
    const name = 'mock-name';
    const options = [{ value: 'value-option', text: 'text-option' }];
    const onFilterMenuChange = jest.fn();
    const { getByText } = render(
      <FilterMenu
        onChange={onFilterMenuChange}
        value={value}
        name={name}
        defaultValue={value}
        options={options}
      />,
    );
    const filterMenu = getByText(/text-option/i);
    expect(filterMenu).toBeInTheDocument();
  });
});
