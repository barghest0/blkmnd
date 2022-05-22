import { TextField } from '@mui/material';
import { useFormik } from 'formik';
import { useState } from 'react';
import useTypedSelector from '../../hooks/redux/useTypedDispatch';
import { ModalsTypes } from '../../redux/modals/types';
import authFormValidation from '../../shared/formValidations/auth';
import {StyledLink} from '../../shared/styles/links';
import Button from '../Button/Button';
import Modal from '../Modal/Modal';
import ModalContainer from '../ModalContainer/ModalContainer';
import * as S from './AuthModal.style';

type LoginValues = {
  username: string;
  password: string;
};

type RegisterValues = {
  username: string;
  password: string;
  email: string;
  passwordConfirm: string;
};

const loginInitialValues = {
  username: '',
  password: '',
};

const registerInitialValues = {
  username: '',
  email: '',
  password: '',
  passwordConfirm: '',
};

const AuthModal = () => {
  const { isAuthOpen } = useTypedSelector(state => state.modals);

  const [form, setForm] = useState('register');

  const onLoginSubmit = (values: LoginValues) => {
    console.log(values);
  };

  const onRegisterSubmit = (values: RegisterValues) => {
    console.log(values);
  };

  const onAuthActionClick = () => {
    if (form === 'register') {
      setForm('login');
    } else {
      setForm('register');
    }
  };

  const loginFormik = useFormik({
    initialValues: loginInitialValues,
    validationSchema: authFormValidation,
    onSubmit: onLoginSubmit,
  });

  const registerFormik = useFormik({
    initialValues: registerInitialValues,
    validationSchema: authFormValidation,
    onSubmit: onRegisterSubmit,
  });

  return (
    <S.AuthModal>
      <ModalContainer isOpen={isAuthOpen} modalType={ModalsTypes.auth}>
        <S.Modal>
          <Modal
            isOpen={isAuthOpen}
            title={`Authorization`}
            modalType={ModalsTypes.auth}
          >
            <S.FormContainer hidden={form !== 'register'}>
              <S.Form onSubmit={registerFormik.handleSubmit}>
                <TextField
                  label="Email"
                  name="email"
                  type="text"
                  variant="standard"
                  onBlur={registerFormik.handleBlur}
                  value={registerFormik.values.email}
                  error={
                    registerFormik.touched.email &&
                    Boolean(registerFormik.errors.email)
                  }
                  helperText={
                    registerFormik.touched.email && registerFormik.errors.email
                  }
                  onChange={registerFormik.handleChange}
                />
                <TextField
                  label="Username"
                  name="username"
                  variant="standard"
                  onBlur={registerFormik.handleBlur}
                  value={registerFormik.values.username}
                  error={
                    registerFormik.touched.username &&
                    Boolean(registerFormik.errors.username)
                  }
                  helperText={
                    registerFormik.touched.username &&
                    registerFormik.errors.username
                  }
                  onChange={registerFormik.handleChange}
                />
                <TextField
                  label="Password"
                  name="password"
                  variant="standard"
                  onBlur={registerFormik.handleBlur}
                  value={registerFormik.values.password}
                  error={
                    registerFormik.touched.password &&
                    Boolean(registerFormik.errors.password)
                  }
                  helperText={
                    registerFormik.touched.password &&
                    registerFormik.errors.password
                  }
                  onChange={registerFormik.handleChange}
                />

                <TextField
                  label="Password Confirm"
                  name="passwordConfirm"
                  variant="standard"
                  onBlur={registerFormik.handleBlur}
                  value={registerFormik.values.passwordConfirm}
                  error={
                    registerFormik.touched.passwordConfirm &&
                    Boolean(registerFormik.errors.passwordConfirm)
                  }
                  helperText={
                    registerFormik.touched.passwordConfirm &&
                    registerFormik.errors.passwordConfirm
                  }
                  onChange={registerFormik.handleChange}
                />
                <S.Submit>
                  <Button type="submit">Register</Button>
                </S.Submit>
              </S.Form>
            </S.FormContainer>
            <S.FormContainer hidden={form !== 'login'}>
              <S.Form onSubmit={loginFormik.handleSubmit}>
                <TextField
                  label="Username"
                  name="username"
                  variant="standard"
                  onBlur={loginFormik.handleBlur}
                  value={loginFormik.values.username}
                  error={
                    loginFormik.touched.username &&
                    Boolean(loginFormik.errors.username)
                  }
                  helperText={
                    loginFormik.touched.username && loginFormik.errors.username
                  }
                  onChange={loginFormik.handleChange}
                />
                <TextField
                  label="Password"
                  name="password"
                  variant="standard"
                  onBlur={loginFormik.handleBlur}
                  value={loginFormik.values.password}
                  error={
                    loginFormik.touched.password &&
                    Boolean(loginFormik.errors.password)
                  }
                  helperText={
                    loginFormik.touched.password && loginFormik.errors.password
                  }
                  onChange={loginFormik.handleChange}
                />
                <S.Submit>
                  <Button type="submit">Login</Button>
                </S.Submit>
              </S.Form>
            </S.FormContainer>
            <S.AuthAction onClick={onAuthActionClick}>
              {form === 'register' ? 'Login' : 'Register'}
            </S.AuthAction>
          </Modal>
        </S.Modal>
      </ModalContainer>
    </S.AuthModal>
  );
};

export default AuthModal;
