import styled, { css } from 'styled-components';
import { SearchProps } from './HeaderSearch';
import ThemeColors from '../../shared/styles/theme';
import { breakpoint } from '../../shared/styles/breakpoints';

const HeaderSearch = styled.div`
  display: flex;
  position: relative;
`;

const SearchIcon = styled.div<SearchProps>`
  ${({ isOpen }) => {
    const transform = isOpen ? 'translateX(-220px)' : 'translateX(0px)';
    return css`
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      margin-right: 5px;
      width: 30px;
      transform: ${transform};
      transition: all 0.2s linear;
    `;
  }}
`;

const SearchFieldContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const SearchInput = styled.input<SearchProps>`
  ${({ isOpen }) => {
    const width = isOpen ? '220px' : 0;

    return css`
      max-width: ${width};
      overflow: hidden;
      margin: 0;
      border: none;
      outline: none;
      transition: all 0.2s linear;
      position: absolute;
      right: 0;
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

const CloseButton = styled.div<SearchProps>`
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

export {
  HeaderSearch,
  SearchIcon,
  SearchFieldContainer,
  SearchInput,
  CloseButton,
};
