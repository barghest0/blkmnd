import styled from 'styled-components';

import { breakpoint } from 'shared/styles/breakpoints';
import { container, page } from 'shared/styles/mixins';

const SoundKit = styled.div`
  ${page}
`;

const Container = styled.div`
  ${container}
`;

const Content = styled.div`
  display: grid;
  grid-template-columns: 300px 1fr;
  column-gap: 30px;
  align-content: center;
  margin-bottom: 50px;
  @media ${breakpoint('md')} {
    grid-template-columns: 1fr;
    justify-items: center;
  }
`;

const Title = styled.h1`
  font-size: 32px;
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

const TitleContainer = styled.div`
  @media ${breakpoint('md')} {
    text-align: center;
  }
`;

const Actions = styled.div`
  display: grid;
  grid-template-columns: 100px 40px;
  grid-auto-rows: 40px;
  column-gap: 10px;
  align-content: center;
`;

const SoundKitInfo = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 0.5fr 1fr 40px;

  @media ${breakpoint('md')} {
    justify-items: center;
  }
`;

const Player = styled.div`
  grid-row-start: 1;
  grid-column: 1/3;
`;

const Action = styled.div``;

const Comment = styled.div`
  margin-bottom: 20px;
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
  SoundKitInfo,
  TitleContainer,
  Description,
};
