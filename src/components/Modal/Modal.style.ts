import styled, { css } from 'styled-components';
import ThemeColors from '../../shared/styles/theme';
import { ModalProps } from './Modal';

const Modal = styled.div<ModalProps>`
  ${({ isOpen }) => {
    const visability = isOpen ? '1' : '0';
    const pointerEvents = isOpen ? 'all' : 'none';

    return css`
      position: fixed;
      top: 0;
      z-index: 110;
      width: 100%;
      height: 100%;
      overflow: hidden;
      pointer-events: ${pointerEvents};
      background-color: ${ThemeColors.mainColor}7d;

      opacity: ${visability};
      display: flex;
      justify-content: center;
      transition: all 0.2s linear;
    `;
  }}
`;

const Content = styled.div<ModalProps>`
  ${({ isOpen }) => {
    const translate = isOpen ? '0' : '100px';
    const opacity = isOpen ? '1' : '0';

    return css`
      display: flex;
      justify-content: center;
      align-self: center;
      width: 300px;
      height: 300px;
      background: ${ThemeColors.mainColor};
      transition: all 0.3s linear;
      opacity: ${opacity};
      transform: translateY(${translate});
    `;
  }}
`;

export { Modal, Content };
