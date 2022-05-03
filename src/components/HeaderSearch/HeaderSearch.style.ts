import styled, { css } from 'styled-components';
import { SearchInputProps } from './HeaderSearch';
import ThemeColors from '../../shared/styles/theme';

const HeaderSearch = styled.form`
  display: flex;
`;

const SearchIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin-right: 5px;
`;

const SearchField = styled.div`
  display: flex;
  position: relative;
`;

const SearchInput = styled.input<SearchInputProps>`
  ${({ isOpen }) => {
    const width = isOpen ? '220px' : 0;

    return css`
      max-width: ${width};
      overflow: hidden;
      margin: 0;
      border: none;
      outline: none;
      transition: all 0.2s linear;
      background-color: transparent;
      color: ${ThemeColors.white};
      font-family: inherit;
      font-size: 16px;
      ::placeholder {
        font-size: 16px;
        color: ${ThemeColors.white};
      }
    `;
  }}
`;

const CloseButton = styled.div<SearchInputProps>`
  ${({ isOpen }) => {
    const opacity = isOpen ? 1 : 0;
    const pointerEvents = isOpen ? 'all' : 'none';
    return css`
      position: absolute;
      right: 0;
      top: 50%;
      transform: translateY(-50%);
      cursor: pointer;
      pointer-events: ${pointerEvents};
      display: flex;
      justify-content: center;
      align-items: center;
      transition: all 0.2s linear;
      opacity: ${opacity};
    `;
  }}
`;

export { HeaderSearch, SearchIcon, SearchField, SearchInput, CloseButton };
