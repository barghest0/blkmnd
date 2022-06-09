import { FC, SyntheticEvent } from 'react';
import { TextField as MUITextField } from '@mui/material';

type Props = {
  name: string;
  onChange: (event: SyntheticEvent) => void;
  value: string | number | null;
  onBlur?: (event: SyntheticEvent) => void;
  label?: string;
  variant?: 'standard' | 'outlined' | 'filled';
  error?: string;
  touched?: boolean;
  placeholder?: string;
  type?: string;
};

const TextField: FC<Props> = ({
  label,
  name,
  type,
  variant,
  onBlur,
  onChange,
  error,
  value,
  touched,
  placeholder,
}) => (
  <MUITextField
    label={label}
    name={name}
    type={type}
    variant={variant}
    onBlur={onBlur}
    onChange={onChange}
    error={touched && Boolean(error)}
    value={value}
    placeholder={placeholder}
    helperText={touched && error}
  />
);

TextField.defaultProps = {
  error: '',
  touched: false,
  type: 'text',
  variant: 'standard',
  placeholder: '',
  label: '',
  onBlur: undefined,
};

export default TextField;
