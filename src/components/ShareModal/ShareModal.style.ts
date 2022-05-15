import styled from 'styled-components';
import { styled as MUIstyled, TextField } from '@mui/material';
import ThemeColors from '../../shared/styles/theme';

const ShareModal = styled.div``;

const Modal = styled.div`
  background-color: ${ThemeColors.mainColor};
  width: 450px;
  height: 350px;
`;

const Content = styled.div`
  width: 100%;
  padding: 0 10px;
`;

const Tabs = styled.div``;

const TabsContent = styled.div``;

const TabPanel = styled.div`
  margin-top: 30px;
`;

const UrlField = styled.div`
  position: relative;
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

  '&:hover .MuiInputLabel-root': {
    color: ThemeColors.secondColor,
  },

  '& .MuiInputLabel-root': {
    color: 'rgba(218, 218, 218, 0.7)',
  },
});

const CopyUrl = styled.div`
  cursor: pointer;
  border-radius: 5px;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 50%;
  right: 5px;
  width: 15%;
  height: 90%;
  transform: translateY(-50%);
  background-color: #101010;
  opacity: 0.8;
`;

export {
  ShareModal,
  Modal,
  Content,
  Tabs,
  TabsContent,
  TabPanel,
  UrlField,
  Field,
  CopyUrl,
};
