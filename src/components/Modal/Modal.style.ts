import styled, { css } from 'styled-components';
import CloseIcon from '@mui/icons-material/Close';

import { textOverflow } from 'shared/styles/mixins';

import { ModalProps } from './Modal';

const Modal = styled.div<ModalProps>`
  ${({ isOpen }) => {
    const translate = isOpen ? '0' : '100px';
    const opacity = isOpen ? '1' : '0';

    return css`
      display: flex;
      justify-content: center;
      align-self: center;
      width: 100%;
      height: 100%;
      transition: all 0.3s linear;
      opacity: ${opacity};
      transform: translateY(${translate});

      padding: 20px;
    `;
  }}
`;

const Title = styled.h2`
  text-align: start;
  font-size: 24px;
  font-weight: 600;
  width: 90%;
  ${textOverflow};
`;

const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Inner = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Content = styled.div`
  overflow: hidden;
`;

const CloseButton = styled(CloseIcon)`
  cursor: pointer;
`;

export {
 Modal, Title, Content, Header, CloseButton, Inner 
};
