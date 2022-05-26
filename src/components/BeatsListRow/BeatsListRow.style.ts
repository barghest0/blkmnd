import styled, { css } from 'styled-components';
import { breakpoint } from '../../shared/styles/breakpoints';
import { textOverflow } from '../../shared/styles/mixins';
import ThemeColors from '../../shared/styles/theme';
import { RowProps } from './BeatsListRow';

const BeatsListRow = styled.div<RowProps>`
  ${({ isActive }) => {
    const color = isActive ? ThemeColors.secondColor : ThemeColors.white;

    return css`
      display: grid;
      grid-template-columns: 1fr 5fr 1fr 1fr 3fr 3fr;
      grid-template-rows: 40px;
      align-items: center;
      color: ${color};
      column-gap: 10px;
      padding: 10px 0;
      font-weight: 500;
      cursor: pointer;
      border-bottom: 1px solid ${ThemeColors.borderColor};
      @media ${breakpoint('lg')} {
        grid-template-columns: 0.1fr 3fr 1fr;
      }
    `;
  }}
`;

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

const Title = styled.h4`
  ${textOverflow}
`;

const Tag = styled.div`
  width: 100%;
  height: 100%;
`;

const Thumbnail = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 4px;
  display: block;
  justify-self: center;
`;

const Tags = styled.div`
  display: flex;
  column-gap: 10px;
  width: 100%;
  height: 100%;
  @media ${breakpoint('lg')} {
    display: none;
  }
`;

const Actions = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 3fr;
  column-gap: 10px;
  height: 100%;
  width: 100%;
`;

const Action = styled.div``;

export {
  BeatsListRow,
  Time,
  Bpm,
  Title,
  Tag,
  Tags,
  Action,
  Actions,
  Thumbnail,
};
