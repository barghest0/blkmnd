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
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-template-rows: repeat(auto-fill, minmax(250px, 1fr));
  column-gap: 40px;
  row-gap: 20px;
  justify-items: center;
`;

export { SoundKits, Container, Title, SoundKitsList };
