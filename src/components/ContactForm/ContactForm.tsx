import { useFormik } from 'formik';
import Button from '../Button/Button';
import * as S from './ContactForm.style';

type FormValues = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const ContactForm = () => {
  const initialFormValues: FormValues = {
    name: '',
    email: '',
    subject: '',
    message: '',
  };
  const onFormSubmit = (values: FormValues) => {
    console.log(values);
  };
  const formik = useFormik({
    initialValues: initialFormValues,
    onSubmit: onFormSubmit,
  });
  return (
    <S.ContactForm onSubmit={formik.handleSubmit}>
      <S.MainFields>
        <S.TextField
          label="Name"
          type="text"
          variant="standard"
          onChange={formik.handleChange}
        />
        <S.TextField
          label="Email"
          type="email"
          variant="standard"
          onChange={formik.handleChange}
        />
      </S.MainFields>
      <S.TextField
        label="Subject"
        type="text"
        variant="standard"
        onChange={formik.handleChange}
      />
      <S.TextField
        label="Message"
        type="text"
        variant="standard"
        onChange={formik.handleChange}
      />
      <S.SubmitForm>
        <Button type={'submit'}>send message</Button>
      </S.SubmitForm>
    </S.ContactForm>
  );
};

export default ContactForm;
