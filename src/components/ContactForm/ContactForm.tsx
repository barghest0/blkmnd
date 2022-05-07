import Button from '../Button/Button';
import * as S from './ContactForm.style';

const ContactForm = () => {
  return (
    <S.ContactForm>
      <S.MainFields>
        <S.TextField label="Name" type="text" variant="standard" />
        <S.TextField label="Email" type="email" variant="standard" />
      </S.MainFields>
      <S.TextField label="Subject" type="text" variant="standard" />
      <S.TextField label="Message" type="text" variant="standard" />
      <S.SubmitForm>
        <Button>send message</Button>
      </S.SubmitForm>
    </S.ContactForm>
  );
};

export default ContactForm;
