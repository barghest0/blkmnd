import styled from 'styled-components';
import ThemeColors from '../../shared/styles/theme';

const Button = styled.button`
  width: 100%;
  height: 100%;
  color: ${ThemeColors.black};
  background-color: ${ThemeColors.secondColor};
  border-radius: 4px;
  border: none;
  outline: none;
  text-transform: uppercase;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
`;

export { Button };
