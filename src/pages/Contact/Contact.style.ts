import styled from 'styled-components';

import { breakpoint } from 'shared/styles/breakpoints';
import { container, page, pageTitle } from 'shared/styles/mixins';

const Contact = styled.div`
  ${page}
`;

const Container = styled.div`
  ${container}
`;

const Title = styled.h1`
  ${pageTitle}
`;

const Form = styled.div`
  width: 60%;
  margin: 0 auto;
  @media ${breakpoint('md')} {
    width: 80%;
  }
`;

export {
 Contact, Container, Title, Form 
};
