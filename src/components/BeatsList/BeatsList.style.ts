import styled from 'styled-components';
import { breakpoint } from '../../shared/styles/breakpoints';
import ThemeColors from '../../shared/styles/theme';

const BeatsList = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  padding: 0 5px;
  row-gap: 10px;
`;

const ListHead = styled.div`
  display: grid;
  grid-template-columns: 1fr 5fr 1fr 1fr 3fr 3fr;
  grid-template-rows: 40px;
  align-items: center;
  column-gap: 10px;
  padding: 10px 0;
  cursor: pointer;

  @media ${breakpoint('lg')} {
    display: none;
  }
`;

const HeadColumn = styled.div`
  text-transform: uppercase;
  font-weight: 700;
  color: ${ThemeColors.actionColor};
  font-size: 11px;
`;

export { BeatsList, HeadColumn, ListHead };
