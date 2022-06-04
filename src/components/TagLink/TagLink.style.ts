import styled from 'styled-components';

import ThemeColors from 'shared/styles/theme';

const TagLink = styled.div`
  height: 100%;
  font-size: 14px;
  display: flex;
  justify-content: center;
  align-self: center;
  color: ${ThemeColors.actionColor};
  background-color: ${ThemeColors.black};
  font-weight: 500;
  border-radius: 40px;
  padding: 0 5%;
  overflow: hidden;
  white-space: nowrap;
  max-height: 40px;
`;

const Link = styled.div`
  display: flex;
  justify-content: center;
  align-self: center;
`;

export { TagLink, Link };
