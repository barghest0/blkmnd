import styled from 'styled-components';
import { breakpoint } from '../../shared/styles/breakpoints';

const QueueBeat = styled.div`
  display: grid;
  grid-template-rows: 30px;
  grid-template-columns: 30px 2.5fr 0.5fr 0.3fr 1fr 0.5fr;
  align-items: center;
  column-gap: 10px;
  @media ${breakpoint('lg')} {
    grid-template-columns: 30px 3fr 1fr;
  }
`;

const Thumbnail = styled.img`
  width: 100%;
  height: 100%;
`;

const Title = styled.h4``;

const Time = styled.div`
  @media ${breakpoint('lg')} {
    display: none;
  }
`;

const Bpm = styled.div`
  @media ${breakpoint('lg')} {
    display: none;
  }
`;

const Tags = styled.div`
  display: flex;
  column-gap: 10px;
  height: 100%;
  @media ${breakpoint('lg')} {
    display: none;
  }
`;

const Tag = styled.div`
  width: 100%;
  height: 100%;
`;

const Actions = styled.div`
  display: flex;
  column-gap: 10px;
  height: 100%;
`;

export { QueueBeat, Thumbnail, Title, Bpm, Tags, Actions, Time, Tag };
