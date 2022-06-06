import styled from 'styled-components';

const CollabCard = styled.div`
  width: 100%;
`;

const Thumbnail = styled.div`
  width: 100%;
  min-height: 180px;
  margin-bottom: 5px;
  background-color: transparent;
`;

const Title = styled.h3`
  text-align: center;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-size: 14px;
  margin-bottom: 5px;
`;

const Price = styled.p`
  text-align: center;
  font-size: 14px;
`;

export {
 CollabCard, Thumbnail, Title, Price 
};
