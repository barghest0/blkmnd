import styled from 'styled-components';
import { breakpoint } from '../../shared/styles/breakpoints';
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
  column-gap: 30px;
  @media ${breakpoint('md')} {
    grid-template-columns: 1fr;
    justify-items: center;
  }
`;

const Subtitle = styled.h2`
  font-size: 1rem;
`;

const Thumbnail = styled.img`
  border-radius: 5px;
  width: 100%;
  height: 100%;
  grid-row: 1/5;

  @media ${breakpoint('md')} {
    width: 70%;
  }
`;

const Description = styled.div``;

const TitleContainer = styled.div``;

const CollabInfo = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 0.5fr 1fr 40px;
  @media ${breakpoint('md')} {
    justify-items: center;
  }
`;

const Actions = styled.div`
  display: grid;
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
  CollabInfo,
  TitleContainer,
};
