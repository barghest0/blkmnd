import { useFormik } from 'formik';
import Button from '../../components/Button/Button';
import {
  profileInfoValidation,
  profilePasswordValidation,
} from '../../shared/formValidations/profile';
import { RouterPaths } from '../../shared/router/types';
import { ButtonLink } from '../../shared/styles/links';
import * as S from './Profile.style';

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
            <S.TextInput
              label="Email"
              name="email"
              type="text"
              variant="outlined"
              onBlur={infoFormik.handleBlur}
              value={infoFormik.values.email}
              error={
                infoFormik.touched.email && Boolean(infoFormik.errors.email)
              }
              helperText={infoFormik.touched.email && infoFormik.errors.email}
              onChange={infoFormik.handleChange}
            />
            <S.TextInput
              label="Username"
              name="username"
              variant="outlined"
              onBlur={infoFormik.handleBlur}
              value={infoFormik.values.username}
              error={
                infoFormik.touched.username &&
                Boolean(infoFormik.errors.username)
              }
              helperText={
                infoFormik.touched.username && infoFormik.errors.username
              }
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
            <S.TextInput
              label="Current password"
              name="currentPassword"
              type="password"
              variant="outlined"
              onBlur={passwordFormik.handleBlur}
              value={passwordFormik.values.currentPassword}
              error={
                passwordFormik.touched.currentPassword &&
                Boolean(passwordFormik.errors.currentPassword)
              }
              helperText={
                passwordFormik.touched.currentPassword &&
                passwordFormik.errors.currentPassword
              }
              onChange={passwordFormik.handleChange}
            />
            <S.NewPassword>
              <S.TextInput
                label="New password"
                name="newPassword"
                type="password"
                variant="outlined"
                onBlur={passwordFormik.handleBlur}
                value={passwordFormik.values.newPassword}
                error={
                  passwordFormik.touched.newPassword &&
                  Boolean(passwordFormik.errors.newPassword)
                }
                helperText={
                  passwordFormik.touched.newPassword &&
                  passwordFormik.errors.newPassword
                }
                onChange={passwordFormik.handleChange}
              />
              <S.TextInput
                label="Confirm new password"
                name="confirmPassword"
                type="password"
                onBlur={passwordFormik.handleBlur}
                value={passwordFormik.values.confirmPassword}
                error={
                  passwordFormik.touched.confirmPassword &&
                  Boolean(passwordFormik.errors.confirmPassword)
                }
                helperText={
                  passwordFormik.touched.confirmPassword &&
                  passwordFormik.errors.confirmPassword
                }
                variant="outlined"
                onChange={passwordFormik.handleChange}
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
