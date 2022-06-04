import ContactForm from 'components/ContactForm/ContactForm';

import * as S from './Contact.style';

const Contact = () => {
  return (
    <S.Contact>
      <S.Container>
        <S.Title>Contact</S.Title>
        <S.Form>
          <ContactForm />
        </S.Form>
      </S.Container>
    </S.Contact>
  );
};

export default Contact;
