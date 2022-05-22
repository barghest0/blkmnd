import styled from 'styled-components';
import ThemeColors from '../../shared/styles/theme';

const AuthModal = styled.div``;

const Modal = styled.div`
  width: 400px;
  background-color: ${ThemeColors.layoutColor};
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
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

export { AuthModal, Modal, Form, Submit, AuthAction, FormContainer };
