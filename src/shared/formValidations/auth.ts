import * as yup from 'yup';

const registerFormValidation = yup.object({
  username: yup.string().required('Required Field'),
  password: yup.string().required('Required Field'),
  email: yup.string().email('Enter a valid email').required('Required Field'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password')], 'Passwords must match')
    .required('Required Field'),
});

const loginFormValidation = yup.object({
  username: yup.string().required('Required Field'),
  password: yup.string().required('Required Field'),
});

export { registerFormValidation, loginFormValidation };
