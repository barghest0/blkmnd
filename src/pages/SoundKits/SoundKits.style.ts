import styled from 'styled-components';
import { container, page, pageTitle } from '../../shared/styles/mixins';

const SoundKits = styled.div`
  ${page}
`;

const Container = styled.div`
  ${container}
`;

const Title = styled.h1`
  ${pageTitle}
`;

const SoundKitsList = styled.div`
  display: grid;
  margin: 0 auto;
  grid-auto-flow: column;
  column-gap: 40px;
  justify-items: center;
`;


export { SoundKits, Container, Title, SoundKitsList };
