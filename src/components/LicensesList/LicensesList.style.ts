import styled from 'styled-components';

const LicensesList = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  justify-items: center;
  column-gap: 50px;
`;

const Column = styled.div`
  width: 100%;
`;

const Title = styled.p`
  font-weight: 600;
  font-size: 14px;
  text-align: center;
`;

const Price = styled.p`
  font-size: 36px;
  font-weight: 700;
  margin-bottom: 30px;
  text-align: center;
`;

const Details = styled.div`
  height: 40px;
  font-size: 14px;
`;

export { LicensesList, Column, Title, Price, Details };
