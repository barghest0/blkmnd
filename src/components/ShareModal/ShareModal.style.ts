import styled from 'styled-components';
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

export { ShareModal, Modal, Content };
