import styled from 'styled-components';

import ThemeColors from 'shared/styles/theme';

const MembershipCard = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${ThemeColors.layoutColor};
  border: 1px solid ${ThemeColors.secondColor};
  border-radius: 5px;
  padding: 20px 30px;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h4`
  text-transform: uppercase;
  font-weight: normal;
  text-align: center;
  margin-bottom: 10px;
`;

const Details = styled.div`
  margin-bottom: 10px;
`;

const Join = styled.div`
  width: 100%;
`;

export {
 Title, MembershipCard, Details, Join 
};
