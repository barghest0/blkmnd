import styled from 'styled-components';

import { breakpoint } from 'shared/styles/breakpoints';

const CommentField = styled.form`
  display: grid;
  grid-template-columns: 70px 1fr 100px;
  grid-template-rows: 40px;
  column-gap: 20px;
  align-items: center;
  justify-items: center;
`;

const TextField = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  @media ${breakpoint('sm')} {
    grid-column: 1/3;
  }
`;

const Avatar = styled.img`
  @media ${breakpoint('sm')} {
    display: none;
  }
`;

const Submit = styled.div`
  width: 100%;
  height: 100%;
`;

export {
  CommentField, Avatar, Submit, TextField,
};
