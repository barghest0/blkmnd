import styled from 'styled-components';
import { textOverflow } from '../../shared/styles/mixins';

const ShareModal = styled.div``;

const Modal = styled.div`
  background: linear-gradient(
    180deg,
    rgba(34, 126, 129, 1) 0%,
    rgba(18, 18, 18, 1) 100%
  );
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
