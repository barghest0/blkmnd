import styled from 'styled-components';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';

import ThemeColors from 'shared/styles/theme';

const ChooseLicenseCard = styled.div`
  background-color: ${ThemeColors.dark};
  border: 1px solid ${ThemeColors.borderColor};
  border-radius: 5px;
  padding: 20px;
`;

const Info = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const License = styled.div``;

const Title = styled.h2`
  font-weight: 600;
  font-size: 18px;
`;

const FileType = styled.h3`
  font-size: 12px;
  opacity: 0.5;
  font-weight: 500;
`;

const FileTypes = styled.div`
  display: flex;
  column-gap: 5px;
`;

const Buy = styled.div`
  width: 100px;
  height: 40px;
`;

const Terms = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: 40px;
`;

const BuyIcon = styled(ShoppingBagOutlinedIcon)``;

export {
  ChooseLicenseCard,
  Title,
  FileType,
  FileTypes,
  Terms,
  BuyIcon,
  Info,
  Buy,
  License,
};
