import { useFormik } from 'formik';

import Button from 'components/Button/Button';
import contactValidation from 'shared/formValidations/contact';

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

  const { handleSubmit, handleBlur, handleChange, touched, values, errors } =
    useFormik({
      initialValues: initialFormValues,
      onSubmit: onFormSubmit,
      validationSchema: contactValidation,
    });

  return (
    <S.ContactForm onSubmit={handleSubmit}>
      <S.MainFields>
        <S.TextField
          label="Name"
          type="text"
          variant="standard"
          name="name"
          onBlur={handleBlur}
          value={values.name}
          error={touched.name && Boolean(errors.name)}
          helperText={touched.name && errors.name}
          onChange={handleChange}
        />
        <S.TextField
          label="Email"
          type="text"
          variant="standard"
          name="email"
          onBlur={handleBlur}
          value={values.email}
          error={touched.email && Boolean(errors.email)}
          helperText={touched.email && errors.email}
          onChange={handleChange}
        />
      </S.MainFields>
      <S.TextField
        label="Subject"
        type="text"
        variant="standard"
        name="subject"
        onBlur={handleBlur}
        value={values.subject}
        error={touched.subject && Boolean(errors.subject)}
        helperText={touched.subject && errors.subject}
        onChange={handleChange}
      />
      <S.TextField
        label="Message"
        type="text"
        variant="standard"
        name="message"
        onBlur={handleBlur}
        value={values.message}
        error={touched.message && Boolean(errors.message)}
        helperText={touched.message && errors.message}
        onChange={handleChange}
      />
      <S.SubmitForm>
        <Button type={'submit'}>send message</Button>
      </S.SubmitForm>
    </S.ContactForm>
  );
};

export default ContactForm;
