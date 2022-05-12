import { useFormik } from 'formik';
import Button from '../../components/Button/Button';
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
    onSubmit: onInfoFormSubmit,
  });

  const passwordFormik = useFormik({
    initialValues: initialPasswordValues,
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
              type="email"
              variant="outlined"
              onChange={infoFormik.handleChange}
            />
            <S.TextInput
              label="Username"
              name="username"
              variant="outlined"
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
              onChange={passwordFormik.handleChange}
            />
            <S.NewPassword>
              <S.TextInput
                label="New password"
                name="newPassword"
                type="password"
                variant="outlined"
                onChange={passwordFormik.handleChange}
              />
              <S.TextInput
                label="Confirm new password"
                name="confirmPassword"
                type="password"
                variant="outlined"
                onChange={passwordFormik.handleChange}
              />
            </S.NewPassword>
            <S.Submit>
              <Button type="submit">Update account password</Button>
            </S.Submit>
          </S.ChangePasswordForm>
        </S.Section>
      </S.Container>
    </S.Profile>
  );
};

export default Profile;
