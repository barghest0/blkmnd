import { RouterNames } from 'shared/router/types';
import { StyledLink } from 'shared/styles/links';

function Logo() {
  return <StyledLink to={RouterNames.landing}>logo</StyledLink>;
}

export default Logo;
