import * as yup from 'yup';

const downloadValidation = yup.object({
  name: yup.string().required('Required Field'),
  email: yup.string().email('Enter a valid email').required('Required Field'),
  agree: yup
    .boolean()
    .oneOf([true], 'The terms and conditions must be accepted.'),
});

export default downloadValidation;
