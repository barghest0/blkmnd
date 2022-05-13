import styled from 'styled-components';
import { container, page } from '../../shared/styles/mixins';

const Collab = styled.div`
  ${page}
`;

const Container = styled.div`
  ${container}
`;

const Title = styled.h1`
  font-size: 32px;
`;

const Content = styled.div`
  display: grid;
  grid-template-columns: 300px 1fr;
  grid-template-rows: 40px 20px 1fr;
  column-gap: 30px;
`;

const Subtitle = styled.h2`
  font-size: 1rem;
`;

const Thumbnail = styled.img`
  border-radius: 5px;
  width: 300px;
  height: 300px;
  grid-row: 1/4;
`;

export { Collab, Container, Title, Content, Thumbnail, Subtitle };
