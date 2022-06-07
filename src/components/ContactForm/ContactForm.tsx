import { useFormik } from 'formik';

import Button from 'components/Button/Button';
import contactValidation from 'shared/formValidations/contact';

import * as S from './ContactForm.style';
import TextField from 'components/TextField/TextField';

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
        <TextField
          label="Name"
          name="name"
          onBlur={handleBlur}
          value={values.name}
          touched={touched.name}
          error={errors.name}
          onChange={handleChange}
        />
        <TextField
          label="Email"
          name="email"
          onBlur={handleBlur}
          value={values.email}
          error={errors.email}
          touched={touched.email}
          onChange={handleChange}
        />
      </S.MainFields>
      <TextField
        label="Subject"
        name="subject"
        onBlur={handleBlur}
        value={values.subject}
        error={errors.subject}
        touched={touched.subject}
        onChange={handleChange}
      />
      <TextField
        label="Message"
        name="message"
        onBlur={handleBlur}
        value={values.message}
        error={errors.message}
        touched={touched.message}
        onChange={handleChange}
      />
      <S.SubmitForm>
        <Button type="submit">send message</Button>
      </S.SubmitForm>
    </S.ContactForm>
  );
};

export default ContactForm;
