import styled from 'styled-components';
import { MenuItem, Select, styled as MUIstyled } from '@mui/material';

import { container, page, pageTitle } from 'shared/styles/mixins';
import { breakpoint } from 'shared/styles/breakpoints';

const Beats = styled.div`
  ${page}
`;

const Container = styled.div`
  ${container}
`;

const SearchContainer = styled.div`
  ${container};
  max-width: 1000px;
`;

const Title = styled.h1`
  ${pageTitle}
`;

const Filters = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: 50px;
  align-items: center;
  gap: 10px;
  margin-bottom: 20px;

  @media ${breakpoint('md')} {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(5, 50px);
  }
`;

const FilterMenu = MUIstyled(Select)({});

const Option = MUIstyled(MenuItem)({});

const SearchField = styled.input`
  width: 100%;
  height: 50px;
  outline: none;
  border: none;
  padding: 15px;
  border-radius: 5px;
  font-size: 16px;
  font-weight: 500;
  font-family: inherit;
`;

const BeatsList = styled.div`
  margin-top: 10px;
`;

export {
  Beats,
  Container,
  Title,
  Filters,
  FilterMenu,
  Option,
  SearchField,
  BeatsList,
  SearchContainer,
};
