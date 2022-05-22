import * as yup from 'yup';

const authFormValidation = yup.object({
  username: yup.string().required('Required Field'),
  password: yup.string().required('Required Field'),
  email: yup.string().email('Enter a valid email').required('Required Field'),
  passwordConfirm: yup
    .string()
    .oneOf([yup.ref('password')], 'Passwords must match')
    .required('Required Field'),
});

export default authFormValidation;
