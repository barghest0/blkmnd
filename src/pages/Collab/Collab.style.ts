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
  grid-template-rows: 0.5fr 0.3fr 3fr 100px;
  column-gap: 30px;
`;

const Subtitle = styled.h2`
  font-size: 1rem;
`;

const Thumbnail = styled.img`
  border-radius: 5px;
  width: 300px;
  height: 300px;
  grid-row: 1/5;
`;

const Description = styled.div``;

const Actions = styled.div`
  display: grid;
  grid-column-start: 2;
  row-gap: 10px;
  grid-template-columns: 100px 40px;
  grid-template-rows: 40px;
  column-gap: 10px;
  align-content: center;
`;

const Action = styled.div`
  width: 100%;
  height: 100%;
`;

export {
  Collab,
  Container,
  Title,
  Content,
  Thumbnail,
  Subtitle,
  Description,
  Actions,
  Action,
};
