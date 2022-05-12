import styled, { css } from 'styled-components';
import { textOverflow } from '../../shared/styles/mixins';
import { DownloadModalProps } from './DownloadModal';

const DownloadModal = styled.div``;

const Modal = styled.div<DownloadModalProps>`
  ${({ background }) => {
    return css`
      background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
        url('${background}') center no-repeat;
      background-size: cover;
      width: 400px;
      height: 450px;
    `;
  }}
`;

const Title = styled.h2`
  text-align: start;
  font-size: 24px;
  font-weight: 600;
  ${textOverflow};
`;

const Inner = styled.div`
  overflow: hidden;
  width: 100%;
  height: 100%;
`;

const Content = styled.div`
  width: 100%;
`;

export { Title, Content, DownloadModal, Modal, Inner };
