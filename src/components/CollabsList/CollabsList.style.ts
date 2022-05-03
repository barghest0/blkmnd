import styled from 'styled-components';

const CollabsList = styled.div`
  display: grid;
  grid-auto-flow: column;
`;

const Collab = styled.div`
  display: flex;
  justify-content: center;
`;

const Thumbnail = styled.img``;

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

export { CollabsList, Collab, Thumbnail, Title, Price };
