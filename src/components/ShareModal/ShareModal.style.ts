import styled from 'styled-components';
import { textOverflow } from '../../shared/styles/mixins';
import ThemeColors from '../../shared/styles/theme';

const ShareModal = styled.div``;

const Modal = styled.div`
  background-color: ${ThemeColors.mainColor};
  width: 400px;
  height: 300px;
`;

const Content = styled.div`
  width: 100%;
`;

const Title = styled.h2`
  text-align: start;
  font-size: 24px;
  font-weight: 600;
  ${textOverflow};
`;

export { ShareModal, Modal, Title, Content };
