import * as yup from 'yup';

const profilePasswordValidation = yup.object({
  currentPassword: yup.string().required('Required Field'),
  newPassword: yup.string().required('Required Field'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('newPassword')], 'Passwords must match')
    .required('Required Field'),
});

const profileInfoValidation = yup.object({
  email: yup.string().email('Enter a valid email').required('Required Field'),
  username: yup.string().required('Required Field'),
});

export { profilePasswordValidation, profileInfoValidation };
