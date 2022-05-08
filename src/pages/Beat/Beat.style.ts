import styled from 'styled-components';
import { container, page, pageTitle } from '../../shared/styles/mixins';

const Beat = styled.div`
  ${page}
`;

const Container = styled.div`
  ${container}
`;

const Title = styled.h1`
  ${pageTitle}
`;

export { Beat, Container, Title };
