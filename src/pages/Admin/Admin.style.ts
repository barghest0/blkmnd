import styled from 'styled-components';
import { styled as MUIstyled } from '@mui/material';
import { container, page, pageTitle } from '../../shared/styles/mixins';
import { DataGrid } from '@mui/x-data-grid';
import { StyledLink } from '../../shared/styles/links';
import ThemeColors from '../../shared/styles/theme';

const Admin = styled.div`
  ${page}
`;

const Container = styled.div`
  ${container}
`;

const Title = styled.h1`
  ${pageTitle}
`;

const BeatsData = styled.div`
  width: 100%;
`;

const GridData = MUIstyled(DataGrid)({
  '&.MuiDataGrid-root': {
    '& .MuiSvgIcon-root': {
      fill: ThemeColors.white,
    },
    '& .MuiDataGrid-columnHeader': {
      '&:focus, &:focus-within': {
        outline: 'none',
      },
    },
    '& .MuiDataGrid-cell': {
      cursor: 'default',
      '&:focus': {
        outline: 'none',
      },
    },
  },
});

const ProductTitle = styled.h2`
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const AddProduct = styled(StyledLink)`
  font-size: 18px;
  color: ${ThemeColors.secondColor};
`;

export {
  Admin,
  Container,
  Title,
  BeatsData,
  GridData,
  ProductTitle,
  AddProduct,
};
