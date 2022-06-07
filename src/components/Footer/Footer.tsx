import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';

import { RouterPaths } from 'shared/router/types';
import { StyledLink } from 'shared/styles/links';
import ThemeColors from 'shared/styles/theme';

import * as S from './Footer.style';

const Footer = () => (
  <S.Footer>
    <S.Container>
      <S.FooterInner>
        <S.Overview>
          <S.Logo alt="logo" />
          <S.Description>
            Download free beats and free drum kits today
          </S.Description>
        </S.Overview>
        <S.Nav>
          <S.Column>
            <StyledLink to={RouterPaths.landing}>Home</StyledLink>
            <StyledLink to={RouterPaths.beats}>Beats</StyledLink>
            <StyledLink to={RouterPaths.soundKits}>Sound Kits</StyledLink>
          </S.Column>
          <S.Column>
            <StyledLink to={RouterPaths.collabs}>Collabs</StyledLink>
            <StyledLink to={RouterPaths.contact}>Contact</StyledLink>
          </S.Column>
          <S.Column>
            <StyledLink to={RouterPaths.landing}>Licensing Info</StyledLink>
            <StyledLink to={RouterPaths.landing}>Terms of use</StyledLink>
            <StyledLink to={RouterPaths.landing}>Privacy policy</StyledLink>
          </S.Column>
        </S.Nav>
        <S.Socials>
          <S.Social
            href="https://www.twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <TwitterIcon fontSize="small" sx={{ fill: ThemeColors.white }} />
          </S.Social>
          <S.Social
            href="https://www.youtube.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <YouTubeIcon fontSize="small" sx={{ fill: ThemeColors.white }} />
          </S.Social>
          <S.Social
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <InstagramIcon fontSize="small" sx={{ fill: ThemeColors.white }} />
          </S.Social>
        </S.Socials>
      </S.FooterInner>
    </S.Container>
  </S.Footer>
);

export default Footer;
