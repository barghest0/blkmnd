import styled, { css } from 'styled-components';

import ThemeColors from 'shared/styles/theme';
import { breakpoint } from 'shared/styles/breakpoints';

type PreloaderProps = {
  isFetching: boolean;
};

const AuthModal = styled.div``;

const Modal = styled.div`
  width: 400px;
  background-color: ${ThemeColors.layoutColor};
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  @media ${breakpoint('sm')} {
    width: 100%;
  }
`;

const FormContainer = styled.div``;

const Form = styled.form`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  row-gap: 25px;
  margin-bottom: 30px;
`;

const Submit = styled.div`
  height: 40px;
`;

const AuthAction = styled.div`
  font-size: 16px;
  cursor: pointer;
  text-align: center;
  text-decoration: underline;
`;

const Preloader = styled.div<PreloaderProps>`
  ${({ isFetching }) => {
    const opacity = isFetching ? 1 : 0;
    const pointerEvents = isFetching ? 'all' : 'none';
    return css`
      width: 100%;
      height: 100%;
      position: absolute;
      display: flex;
      justify-content: center;
      opacity: ${opacity};
      align-items: center;
      top: 0;
      left: 0;
      background-color: rgba(0, 0, 0, 0.5);
      z-index: 100;
      pointer-events: ${pointerEvents};
      transition: all 0.2s linear;
    `;
  }}
`;

export { AuthModal, Modal, Form, Submit, AuthAction, FormContainer, Preloader };
