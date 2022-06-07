import { SelectChangeEvent } from '@mui/material';
import { FC } from 'react';
import * as S from './FilterMenu.style';

type Option = {
  value: string | number;
  text: string | number;
};

type Props = {
  value: string | number;
  onChange: (event: SelectChangeEvent<unknown>) => void;
  name: string;
  defaultValue: string | number;
  options: Option[];
};

const FilterMenu: FC<Props> = ({
  value,
  onChange,
  name,
  defaultValue,
  options,
}) => {
  const optionsItems = options.map(({ text, value: optionValue }) => (
    <S.Option key={value} value={optionValue}>
      {text}
    </S.Option>
  ));

  return (
    <S.FilterMenu>
      <S.Dropdown
        value={value}
        onChange={onChange}
        name={name}
        defaultValue={defaultValue}
        displayEmpty
      >
        {optionsItems}
      </S.Dropdown>
    </S.FilterMenu>
  );
};

export default FilterMenu;
