import { TextField } from '@mui/material';
import { useFormik, FormikHelpers } from 'formik';
import { memo, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import useTypedSelector from '../../hooks/redux/useTypedDispatch';
import useActions from '../../hooks/useActions';
import { LoginValues, RegisterValues } from '../../redux/auth/types';
import { ModalsTypes } from '../../redux/modals/types';
import {
  registerFormValidation,
  loginFormValidation,
} from '../../shared/formValidations/auth';
import { ToastTextRow, ToastTextContainer } from '../../shared/styles/toast';
import Button from '../Button/Button';
import Modal from '../Modal/Modal';
import ModalContainer from '../ModalContainer/ModalContainer';
import Preloader from '../Preloader/Preloader';
import * as S from './AuthModal.style';

const loginInitialValues = {
  username: '',
  password: '',
};

const registerInitialValues = {
  username: '',
  email: '',
  password: '',
  confirmPassword: '',
};

type PreloaderProps = {
  isFetching: boolean;
};

const AuthModal = memo(() => {
  const { isAuthOpen } = useTypedSelector(state => state.modals);

  const [form, setForm] = useState('register');

  const { register, setModalVisability, login } = useActions();

  const {
    isFetching,
    isRegisterSuccess,
    isLoginSuccess,
    loginErrors,
    user,
    registerErrors,
  } = useTypedSelector(state => state.auth);

  const showSuccessLoginToast = () =>
    toast.success(`Привет! ${user?.username}`);

  const loginErrorsText =
    loginErrors &&
    Object.values(loginErrors)
      .flat()
      .map((error, index) => <ToastTextRow key={index}>{error}</ToastTextRow>);

  const showSuccessRegisterToast = () =>
    toast.success(`Пользователь успешно зарегестрирован`);

  const showErrorLoginToast = () => {
    toast.error(<ToastTextContainer>{loginErrorsText}</ToastTextContainer>);
  };

  const closeModalAfterAuth = () => {
    setModalVisability({ visability: false, modalType: ModalsTypes.auth });
  };

  const onRegisterSubmit = (
    { username, password, confirmPassword }: RegisterValues,
    helpers: FormikHelpers<RegisterValues>,
  ) => {
    register({ username, password, confirmPassword });
    helpers.resetForm();
  };

  useEffect(() => {
    if (isRegisterSuccess) {
      setForm('login');
      showSuccessRegisterToast();
    }
  }, [isRegisterSuccess]);

  useEffect(() => {
    if (isLoginSuccess && user) {
      closeModalAfterAuth();
      showSuccessLoginToast();
    }
  }, [isLoginSuccess, user]);

  useEffect(() => {
    if (loginErrors) {
      showErrorLoginToast();
    }
  }, [loginErrors, registerErrors]);

  const onLoginSubmit = (
    { username, password }: LoginValues,
    helpers: FormikHelpers<LoginValues>,
  ) => {
    login({ username, password });
    helpers.resetForm();
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
    validationSchema: loginFormValidation,
    onSubmit: onLoginSubmit,
  });

  const registerFormik = useFormik({
    initialValues: registerInitialValues,
    validationSchema: registerFormValidation,
    onSubmit: onRegisterSubmit,
  });

  return (
    <S.AuthModal>
      <ModalContainer isOpen={isAuthOpen} modalType={ModalsTypes.auth}>
        <S.Modal>
          <Modal
            isOpen={isAuthOpen}
            title={form === 'register' ? 'Registration' : 'Authorization'}
            modalType={ModalsTypes.auth}
          >
            <S.FormContainer hidden={form !== 'register'}>
              <S.Preloader isFetching={isFetching}>
                <Preloader />
              </S.Preloader>
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
                  type="password"
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
                  label="Confirm password"
                  name="confirmPassword"
                  variant="standard"
                  type="password"
                  onBlur={registerFormik.handleBlur}
                  value={registerFormik.values.confirmPassword}
                  error={
                    registerFormik.touched.confirmPassword &&
                    Boolean(registerFormik.errors.confirmPassword)
                  }
                  helperText={
                    registerFormik.touched.confirmPassword &&
                    registerFormik.errors.confirmPassword
                  }
                  onChange={registerFormik.handleChange}
                />
                <S.Submit>
                  <Button type="submit">Register</Button>
                </S.Submit>
              </S.Form>
            </S.FormContainer>
            <S.FormContainer hidden={form !== 'login'}>
              <S.Preloader isFetching={isFetching}>
                <Preloader />
              </S.Preloader>

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
                  type="password"
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
});

export { PreloaderProps };
export default AuthModal;
