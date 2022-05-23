import * as yup from 'yup';

const commentValidation = yup.object({
  comment: yup
    .string()
    .required('Required Field')
    .max(200, 'Message should be of maximum 200 characters length'),
});

export default commentValidation;
