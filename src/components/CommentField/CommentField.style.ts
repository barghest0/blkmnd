import styled from 'styled-components';
import ThemeColors from '../../shared/styles/theme';

const CommentField = styled.form`
  display: grid;
  grid-template-columns: 70px 1fr 100px;
  grid-template-rows: 40px;
  column-gap: 20px;
  align-items: center;
  justify-items: center;
`;

const Avatar = styled.img``;

const CommentInput = styled.input`
  background-color: transparent;
  border: none;
  outline: none;
  width: 100%;
  height: 100%;
  border-bottom: 1px solid ${ThemeColors.borderColor};
  color: ${ThemeColors.white};
  font-size: 16px;

  ::placeholder {
    font-weight: 600;
  }
`;

const Submit = styled.div`
  width: 100%;
  height: 100%;
`;

export { CommentInput, CommentField, Avatar, Submit };
