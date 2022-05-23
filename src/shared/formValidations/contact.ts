import * as yup from 'yup';

const contactValidation = yup.object({
  name: yup.string().required('Required Field'),
  email: yup.string().email('Enter a valid email').required('Required Field'),
  subject: yup.string().required('Required Field'),
  message: yup
    .string()
    .required('Required Field')
    .min(10, 'Message should be of minimum 10 characters length')
    .max(200, 'Message should be of maximum 200 characters length'),
});

export default contactValidation;
