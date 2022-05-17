import styled from 'styled-components';
import ThemeColors from '../../shared/styles/theme';

const Image = styled.img`
  width: 100%;
  height: 100%;
  display: block;
`;

const Overlay = styled.div`
  background-color: ${ThemeColors.dark};
  border-radius: 5px;
  width: 100%;
  height: 100%;
`;

export { Image, Overlay };
