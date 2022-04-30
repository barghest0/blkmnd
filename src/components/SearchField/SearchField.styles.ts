import styled from 'styled-components';
import ThemeColors from '../../shared/styles/theme';

const SearchField = styled.div`
  background-color: ${ThemeColors.white};
  width: 100%;
  height: 100%;
  padding: 10px;
  padding-left: 15px;
  border-radius: 4px;
  display: flex;
`;

const SearchInput = styled.input`
  background: transparent;
  border: none;
  outline: none;
  width: 100%;
  height: 100%;
  ::placeholder {
    font-size: 18px;
  }
`;

const SearchButton = styled.div`
  width: 15%;
  height: 100%;
`;

export { SearchInput, SearchField, SearchButton };
