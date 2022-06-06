import styled from 'styled-components';

const Comment = styled.article`
  display: grid;
  grid-template-columns: 70px 70%;
  grid-template-rows: 1fr 4fr;
  column-gap: 10px;
`;

const Avatar = styled.img`
  grid-row: 1/3;
  height: 70px;
  width: 70px;
`;

const Info = styled.div`
  display: flex;
  column-gap: 5px;
`;

const Username = styled.div``;

const Date = styled.div`
  font-size: 12px;
`;

const Content = styled.p`
  white-space: normal;
  word-wrap: break-word;
  grid-column-start: 2;
`;

export {
  Content, Avatar, Info, Comment, Username, Date,
};
