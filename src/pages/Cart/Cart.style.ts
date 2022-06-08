import styled from 'styled-components';

import { breakpoint } from 'shared/styles/breakpoints';
import { container, page, pageTitle } from 'shared/styles/mixins';
import ThemeColors from 'shared/styles/theme';

const Cart = styled.div`
  ${page}
`;

const Container = styled.div`
  ${container}
`;

const Title = styled.h1`
  ${pageTitle}
`;

const ProductsCards = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
`;

const Products = styled.div`
  width: 100%;
`;

const ProductsHeader = styled.div`
  display: grid;
  grid-template-columns: 60px 7fr 1fr 3fr 15px;
  margin-bottom: 20px;
  text-transform: uppercase;
  font-size: 12px;
  column-gap: 10px;
`;

const Product = styled.div`
  grid-column-start: 2;
`;

const Price = styled.div`
  grid-column-start: 3;
`;

const Content = styled.div`
  display: grid;
  grid-template-columns: 2.3fr 1fr;
  gap: 50px;

  @media ${breakpoint('lg')} {
    grid-template-columns: 1fr;
    justify-items: center;
  }
`;

const Payment = styled.form`
  min-height: 350px;
  padding: 20px;
  background-color: ${ThemeColors.layoutColor};
  border: 1px solid ${ThemeColors.borderColor};
  border-radius: 5px;

  @media ${breakpoint('lg')} {
    width: 80%;
    grid-row-start: 2;
    grid-column-start: 1;

    @media ${breakpoint('sm')} {
      width: 100%;
    }
  }
`;

const Coupon = styled.div`
  margin-bottom: 10px;
`;

const CashCalculation = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr 3fr;
  row-gap: 20px;
  border-bottom: 1px solid ${ThemeColors.borderColor};
  margin-bottom: 10px;
`;

const Calculation = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: 600;
  font-size: 16px;
`;

const CalculationText = styled.div``;

const TotalText = styled.div`
  color: ${ThemeColors.secondColor};
  font-size: 20px;
  padding: 20px 0;
`;

const UserEmail = styled.div`
  font-size: 12px;
  text-align: center;
  color: ${ThemeColors.actionColor};
  margin-bottom: 20px;
`;

const Submit = styled.div`
  height: 40px;
`;

export {
  Cart,
  Container,
  Submit,
  UserEmail,
  Calculation,
  CalculationText,
  TotalText,
  Coupon,
  Title,
  ProductsCards,
  ProductsHeader,
  Product,
  Price,
  Content,
  Payment,
  Products,
  CashCalculation,
};
