import styled, { css } from 'styled-components';
import {
  MenuItem,
  Select,
  styled as MUIstyled,
  TextField,
} from '@mui/material';

import ThemeColors from 'shared/styles/theme';
import { breakpoint } from 'shared/styles/breakpoints';

import { DownloadModalProps } from './DownloadModal';

const DownloadModal = styled.div``;

const Modal = styled.div<DownloadModalProps>`
  ${({ background }) => {
    return css`
      display: flex;
      justify-content: center;
      align-items: center;
      background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
        url('${background}') center no-repeat;
      background-size: cover;
      background-color: ${ThemeColors.dark};
      width: 450px;
      @media ${breakpoint('sm')} {
        width: 100%;
      }
    `;
  }}
`;

const Content = styled.div`
  width: 100%;
`;

const Tip = styled.p`
  font-weight: 500;
  margin-bottom: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  row-gap: 30px;
`;

const Field = MUIstyled(TextField)({
  backgroundColor: 'rgba(218, 218, 218, 0.1)',
  height: 50,

  '& .MuiOutlinedInput-root': {
    backgroundColor: 'transparent',
  },

  '& .MuiOutlinedInput-notchedOutline': {
    borderColor: 'rgba(218, 218, 218, 0.1)',
  },
});

const PhoneFields = styled.div`
  display: grid;
  grid-template-columns: 100px 1fr;
  grid-template-rows: 50px;
  column-gap: 10px;
`;

const PhonePrefix = styled(Select)({
  backgroundColor: 'rgba(218, 218, 218, 0.1) !important',
});

const Prefix = MUIstyled(MenuItem)({});

const Submit = styled.div`
  height: 40px;
`;

export {
  Content,
  DownloadModal,
  Modal,
  Tip,
  Field,
  Form,
  PhonePrefix,
  PhoneFields,
  Prefix,
  Submit,
};
