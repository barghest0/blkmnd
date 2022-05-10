import styled from 'styled-components';
import { container, page, pageTitle } from '../../shared/styles/mixins';

const Collabs = styled.div`
  ${page}
`;

const Container = styled.div`
  ${container}
`;

const Title = styled.h1`
  ${pageTitle}
`;

const CollabsList = styled.div`
  display: grid;
  margin: 0 auto;
  grid-auto-flow: column;
  column-gap: 40px;
  justify-items: center;
`;

export { Collabs, Title, Container, CollabsList };
