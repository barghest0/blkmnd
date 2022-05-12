import styled from 'styled-components';
import { styled as MUIstyled, TextField } from '@mui/material';
import { container, page, pageTitle } from '../../shared/styles/mixins';
import ThemeColors from '../../shared/styles/theme';

const Profile = styled.div`
  ${page}
`;

const Container = styled.div`
  ${container}
  max-width:650px;
`;

const Title = styled.h1`
  ${pageTitle}
`;

const Subtitle = styled.h2`
  font-size: 24px;
  font-weight: 500;
  margin-bottom: 30px;
`;

const Section = styled.section`
  margin-bottom: 30px;
`;

const AccountForm = styled.form`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 50px 40px;
  gap: 20px;
`;

const ChangePasswordForm = styled.form`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 50px) 40px;
  gap: 20px;
`;

const NewPassword = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 50px;
  column-gap: 20px;
  grid-row-start: 2;
  grid-column: 1/3;
`;

const Submit = styled.div`
  height: 100%;
  font-size: 14px;
  grid-column: 1/3;
`;

const TextInput = MUIstyled(TextField)({
  height: '100%',
  '& .Mui-focused': {
    color: `${ThemeColors.secondColor} !important`,
  },

  '& .MuiInputLabel-root': {
    color: ThemeColors.white,
  },

  '& .MuiOutlinedInput-root': {
    backgroundColor: '#1C1C1C',
    height: '100%',

    '&:hover': {
      '& .MuiOutlinedInput-notchedOutline': {
        borderColor: '#363636',
      },
    },

    '&.Mui-focused': {
      color: `${ThemeColors.secondColor} !important`,

      '& .MuiOutlinedInput-notchedOutline': {
        borderColor: ThemeColors.secondColor,
        borderWidth: 1,
      },
    },
  },

  '& .MuiOutlinedInput-input': {
    color: ThemeColors.white,
  },

  '& .MuiOutlinedInput-notchedOutline': {
    transition: 'all 0.2s linear',
    borderColor: '#363636',
  },
});

export {
  Profile,
  Container,
  Title,
  Subtitle,
  Section,
  AccountForm,
  ChangePasswordForm,
  Submit,
  TextInput,
  NewPassword,
};
