import styled from 'styled-components';
import { textOverflow } from '../../shared/styles/mixins';

const CardProductCard = styled.div`
  display: grid;
  grid-template-columns: 60px 7fr 1fr 3fr 15px;
  grid-template-rows: 60px;
  column-gap: 10px;
  align-items: center;
`;

const Thumbnail = styled.img`
  width: 100%;
  height: 100%;
`;

const Info = styled.div`
  justify-content: center;
  display: flex;
  flex-direction: column;
  row-gap: 5px;
  ${textOverflow}
`;

const Title = styled.h4`
  ${textOverflow}
`;

const Type = styled.p`
  text-transform: uppercase;
`;

const Price = styled.div`
  font-size: 18px;
  font-weight: 600;
`;

const License = styled.div``;

const Delete = styled.div`
  cursor: pointer;
`;

export {
  CardProductCard,
  Delete,
  Thumbnail,
  Info,
  Title,
  Type,
  Price,
  License,
};
