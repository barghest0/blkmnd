import { useFormik } from 'formik';

import Button from 'components/Button/Button';
import {
  profileInfoValidation,
  profilePasswordValidation,
} from 'shared/formValidations/profile';
import { RouterPaths } from 'shared/router/types';
import { ButtonLink } from 'shared/styles/links';

import * as S from './Profile.style';
import TextField from 'components/TextField/TextField';

type InfoValues = {
  email: string;
  username: string;
};

type PasswordValues = {
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
};

const Profile = () => {
  const isAdmin = true;

  const initialInfoValues: InfoValues = {
    email: '',
    username: '',
  };

  const initialPasswordValues: PasswordValues = {
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  };

  const onPasswordFormSubmit = (values: PasswordValues) => {
    console.log(values);
  };

  const onInfoFormSubmit = (values: InfoValues) => {
    console.log(values);
  };

  const infoFormik = useFormik({
    initialValues: initialInfoValues,
    validationSchema: profileInfoValidation,
    onSubmit: onInfoFormSubmit,
  });

  const passwordFormik = useFormik({
    initialValues: initialPasswordValues,
    validationSchema: profilePasswordValidation,
    onSubmit: onPasswordFormSubmit,
  });

  return (
    <S.Profile>
      <S.Container>
        <S.Title>Profile</S.Title>
        <S.Section>
          <S.Subtitle>Account login</S.Subtitle>
          <S.AccountForm onSubmit={infoFormik.handleSubmit}>
            <TextField
              label="Email"
              name="email"
              variant="outlined"
              onBlur={infoFormik.handleBlur}
              value={infoFormik.values.email}
              error={infoFormik.errors.email}
              touched={infoFormik.touched.email}
              onChange={infoFormik.handleChange}
            />
            <TextField
              label="Username"
              name="username"
              variant="outlined"
              onBlur={infoFormik.handleBlur}
              value={infoFormik.values.username}
              error={infoFormik.errors.username}
              touched={infoFormik.touched.username}
              onChange={infoFormik.handleChange}
            />
            <S.Submit>
              <Button type="submit">Update account information</Button>
            </S.Submit>
          </S.AccountForm>
        </S.Section>
        <S.Section>
          <S.Subtitle>Change account password</S.Subtitle>
          <S.ChangePasswordForm onSubmit={passwordFormik.handleSubmit}>
            <TextField
              label="Current password"
              name="currentPassword"
              type="password"
              variant="outlined"
              onBlur={passwordFormik.handleBlur}
              value={passwordFormik.values.currentPassword}
              error={passwordFormik.errors.currentPassword}
              touched={passwordFormik.touched.currentPassword}
              onChange={passwordFormik.handleChange}
            />
            <S.NewPassword>
              <TextField
                label="New password"
                name="newPassword"
                type="password"
                variant="outlined"
                onBlur={passwordFormik.handleBlur}
                value={passwordFormik.values.newPassword}
                error={passwordFormik.errors.newPassword}
                touched={passwordFormik.touched.newPassword}
                onChange={passwordFormik.handleChange}
              />
              <TextField
                label="Confirm new password"
                name="confirmPassword"
                type="password"
                variant="outlined"
                onBlur={passwordFormik.handleBlur}
                value={passwordFormik.values.confirmPassword}
                error={passwordFormik.errors.confirmPassword}
                onChange={passwordFormik.handleChange}
                touched={passwordFormik.touched.confirmPassword}
              />
            </S.NewPassword>
            <S.Submit>
              <Button type="submit">Update account password</Button>
            </S.Submit>
          </S.ChangePasswordForm>
        </S.Section>
        {isAdmin && (
          <S.AdminPanel>
            <ButtonLink to={RouterPaths.admin}>Admin panel</ButtonLink>
          </S.AdminPanel>
        )}
      </S.Container>
    </S.Profile>
  );
};

export default Profile;
