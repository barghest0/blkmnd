import styled, { css } from 'styled-components';
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

export { Modal };
