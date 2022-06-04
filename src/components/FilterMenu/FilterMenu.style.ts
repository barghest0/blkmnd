import {
  MenuItem,
  Select,
  FormControl,
  styled as MUIstyled,
} from '@mui/material';

const FilterMenu = MUIstyled(FormControl)({});

const Dropdown = MUIstyled(Select)({});

const Option = MUIstyled(MenuItem)({});

export { FilterMenu, Option, Dropdown };
