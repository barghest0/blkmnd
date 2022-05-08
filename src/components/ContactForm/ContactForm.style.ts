import { styled as MUIstyled } from '@mui/material';
import { TextField as MUITextField } from '@mui/material';
import styled from 'styled-components';
import ThemeColors from '../../shared/styles/theme';

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  row-gap: 40px;
  width: 50%;
  margin: 0 auto;
`;

const MainFields = styled.div`
  display: flex;
  column-gap: 20px;
`;

const TextField = MUIstyled(MUITextField)({
  width: '100%',

  '& .MuiInputLabel-root': {
    fontWeight: 500,
    fontFamily: 'Poppins',
    textTransform: 'uppercase',
    fontSize: 14,
    color: ThemeColors.white,
    '& .Mui-focused': {
      color: ThemeColors.white,
    },
  },

  '& .MuiInput-root': {
    color: ThemeColors.white,
    '&::before': {
      color: ThemeColors.white,
      borderColor: ThemeColors.white,
    },

    '&::after': {
      color: ThemeColors.white,
    },
  },
  '& .MuiInput-input': {
    '&:focus': {},
  },
});

const SubmitForm = styled.div`
  width: 160px;
  align-self: flex-end;
  height: 50px;
`;

export { TextField, ContactForm, MainFields, SubmitForm };
