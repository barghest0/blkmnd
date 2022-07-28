import { memo, useEffect, useState } from 'react';
import { useFormik, FormikHelpers } from 'formik';
import { toast } from 'react-toastify';

import Button from 'components/Button/Button';
import Modal from 'components/Modal/Modal';
import TextField from 'components/TextField/TextField';
import ModalContainer from 'components/ModalContainer/ModalContainer';
import Preloader from 'components/Preloader/Preloader';
import useActions from 'hooks/useActions';
import useTypedSelector from 'hooks/redux/useTypedDispatch';
import { LoginValues, RegisterValues } from 'reduxStore/auth/types';
import { ModalsTypes } from 'reduxStore/modals/types';
import * as modalsSelectors from 'reduxStore/modals/selectors';
import {
  registerFormValidation,
  loginFormValidation,
} from 'shared/formValidations/auth';
import { convertErrorsToArray } from 'shared/helpers/errorsHelper';
import { ToastTextRow, ToastTextContainer } from 'shared/styles/toast';
import * as authSelectors from 'reduxStore/auth/selectors';

import * as S from './AuthModal.style';
import { LOGIN_MODAL_STATE, REGISTER_MODAL_STATE } from './constants';

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

const AuthModal = memo(() => {
  const { authModalVisability } = useTypedSelector(
    modalsSelectors.visabilities,
  );

  const [form, setForm] = useState(REGISTER_MODAL_STATE);

  const { register, setModalVisability, login } = useActions();

  const isAuthFetching = useTypedSelector(authSelectors.isAuthFetching);
  const { loginErrors, registerErrors } = useTypedSelector(
    authSelectors.authErrors,
  );
  const { isLoginSuccess, isRegisterSuccess } = useTypedSelector(
    authSelectors.authSuccesses,
  );
  const userInfo = useTypedSelector(authSelectors.userInfo);

  const showSuccessLoginToast = () => {
    toast.success(`Привет! ${userInfo?.username}`);
  };

  const loginErrorsArray = loginErrors && convertErrorsToArray(loginErrors);

  const loginErrorsText = loginErrorsArray?.map((error) => (
    <ToastTextRow key={error}>{error}</ToastTextRow>
  ));

  const showSuccessRegisterToast = () => {
    toast.success('Пользователь успешно зарегестрирован');
  };

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

  const onLoginSubmit = (
    { username, password }: LoginValues,
    helpers: FormikHelpers<LoginValues>,
  ) => {
    login({ username, password });
    helpers.resetForm();
  };

  useEffect(() => {
    if (isRegisterSuccess) {
      setForm(LOGIN_MODAL_STATE);
      showSuccessRegisterToast();
    }
  }, [isRegisterSuccess]);

  useEffect(() => {
    if (isLoginSuccess && userInfo) {
      closeModalAfterAuth();
      showSuccessLoginToast();
    }
  }, [isLoginSuccess, userInfo]);

  useEffect(() => {
    if (loginErrors) {
      showErrorLoginToast();
    }
  }, [loginErrors, registerErrors]);

  const onAuthActionClick = () => {
    if (form === REGISTER_MODAL_STATE) {
      setForm(LOGIN_MODAL_STATE);
    } else {
      setForm(REGISTER_MODAL_STATE);
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
      <ModalContainer isOpen={authModalVisability} modalType={ModalsTypes.auth}>
        <S.Modal>
          <Modal
            isOpen={authModalVisability}
            title={
              form === REGISTER_MODAL_STATE ? 'Registration' : 'Authorization'
            }
            modalType={ModalsTypes.auth}
          >
            <S.FormContainer hidden={form !== REGISTER_MODAL_STATE}>
              <S.Preloader isFetching={isAuthFetching}>
                <Preloader />
              </S.Preloader>
              <S.Form onSubmit={registerFormik.handleSubmit}>
                <TextField
                  label="Email"
                  name="email"
                  onBlur={registerFormik.handleBlur}
                  value={registerFormik.values.email}
                  touched={registerFormik.touched.email}
                  error={registerFormik.errors.email}
                  onChange={registerFormik.handleChange}
                />
                <TextField
                  label="Username"
                  name="username"
                  onBlur={registerFormik.handleBlur}
                  value={registerFormik.values.username}
                  error={registerFormik.errors.username}
                  touched={registerFormik.touched.username}
                  onChange={registerFormik.handleChange}
                />
                <TextField
                  label="Password"
                  name="password"
                  type="password"
                  onBlur={registerFormik.handleBlur}
                  value={registerFormik.values.password}
                  error={registerFormik.errors.password}
                  touched={registerFormik.touched.password}
                  onChange={registerFormik.handleChange}
                />
                <TextField
                  label="Confirm password"
                  name="confirmPassword"
                  type="password"
                  onBlur={registerFormik.handleBlur}
                  value={registerFormik.values.confirmPassword}
                  error={registerFormik.errors.confirmPassword}
                  touched={registerFormik.touched.confirmPassword}
                  onChange={registerFormik.handleChange}
                />
                <S.Submit>
                  <Button type="submit">Register</Button>
                </S.Submit>
              </S.Form>
            </S.FormContainer>
            <S.FormContainer hidden={form !== LOGIN_MODAL_STATE}>
              <S.Preloader isFetching={isAuthFetching}>
                <Preloader />
              </S.Preloader>
              <S.Form onSubmit={loginFormik.handleSubmit}>
                <TextField
                  label="Username"
                  name="username"
                  onBlur={loginFormik.handleBlur}
                  value={loginFormik.values.username}
                  error={loginFormik.errors.username}
                  touched={loginFormik.touched.username}
                  onChange={loginFormik.handleChange}
                />
                <TextField
                  label="Password"
                  name="password"
                  type="password"
                  onBlur={loginFormik.handleBlur}
                  value={loginFormik.values.password}
                  error={loginFormik.errors.password}
                  touched={loginFormik.touched.password}
                  onChange={loginFormik.handleChange}
                />
                <S.Submit>
                  <Button type="submit">Login</Button>
                </S.Submit>
              </S.Form>
            </S.FormContainer>
            <S.AuthAction onClick={onAuthActionClick}>
              {form === REGISTER_MODAL_STATE ? 'Login' : 'Register'}
            </S.AuthAction>
          </Modal>
        </S.Modal>
      </ModalContainer>
    </S.AuthModal>
  );
});

export default AuthModal;
