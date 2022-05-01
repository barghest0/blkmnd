import { css } from 'styled-components';

const container = css`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const button = css`
  width: 100%;
  height: 100%;
  border-radius: 4px;
  border: none;
  outline: none;
  text-transform: uppercase;
  font-size: inherit;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 5%;
  transition: all 0.2s linear;

  &:hover {
    filter: brightness(0.8);
  }
`;

export { container, button };
