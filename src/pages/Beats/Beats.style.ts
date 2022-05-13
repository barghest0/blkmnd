import styled from 'styled-components';
import { MenuItem, Select, styled as MUIstyled } from '@mui/material';
import { container, page, pageTitle } from '../../shared/styles/mixins';
import ThemeColors from '../../shared/styles/theme';

const Beats = styled.div`
  ${page}
`;

const Container = styled.div`
  ${container}
`;

const Title = styled.h1`
  ${pageTitle}
`;

const Filters = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: 50px;
  align-items: center;
  column-gap: 10px;
`;

const FilterMenu = MUIstyled(Select)({
  height: '100%',

  '& .MuiSelect-root': {
    height: '100%',
    backgroundColor: '#1C1C1C',
    color: ThemeColors.white,

    '&:hover': {
      '& .MuiOutlinedInput-notchedOutline': {
        borderColor: '#363636 !important',
      },
    },

    '&.Mui-focused': {
      color: `${ThemeColors.secondColor} !important`,

      '& .MuiOutlinedInput-notchedOutline': {
        borderColor: ThemeColors.secondColor,
        borderWidth: 1,
      },
    },
  },

  '& .MuiOutlinedInput-notchedOutline': {
    borderColor: '#363636',
  },
});

const Option = MUIstyled(MenuItem)({});

export { Beats, Container, Title, Filters, FilterMenu, Option };
