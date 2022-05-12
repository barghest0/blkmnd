import styled from 'styled-components';
import { textOverflow } from '../../shared/styles/mixins';
import ThemeColors from '../../shared/styles/theme';

const LicensesModal = styled.div``;

const Modal = styled.div`
  width: 80%;
  height: 80%;
  background-color: ${ThemeColors.mainColor};
`;

const Content = styled.div`
  width: 100%;
`;

const Title = styled.h2`
  text-align: start;
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 50px;
  ${textOverflow};
`;

const Text = styled.p`
  padding: 0 20px;
  overflow: auto;
`;
export { LicensesModal, Modal, Content, Title, Text };
