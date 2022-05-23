import styled from 'styled-components';
import { container, page } from '../../shared/styles/mixins';

const SoundKit = styled.div`
  ${page}
`;

const Container = styled.div`
  ${container}
`;

const Content = styled.div`
  display: grid;
  grid-template-columns: 300px 1fr;
  grid-template-rows: 0.5fr 0.3fr 3fr 100px;
  column-gap: 30px;
  align-content: center;
  margin-bottom: 20px;
`;

const Title = styled.h1`
  font-size: 32px;
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
  grid-template-columns: 100px 40px;
  grid-auto-rows: 40px;
  column-gap: 10px;
  align-content: center;
`;

const Player = styled.div`
  grid-row-start: 1;
  grid-column: 1/3;
`;

const Action = styled.div``;

const Comment = styled.div`
  margin-bottom: 30px;
`;

const Reviews = styled.div``;

const ReviewsTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;
`;

const ReviewsComments = styled.div``;

export {
  SoundKit,
  Container,
  Comment,
  Reviews,
  ReviewsTitle,
  ReviewsComments,
  Title,
  Subtitle,
  Thumbnail,
  Content,
  Action,
  Actions,
  Player,
  Description,
};
