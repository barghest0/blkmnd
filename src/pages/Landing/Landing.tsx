import { FC, memo, useEffect } from 'react';

import ScrollContainer from 'react-indiana-drag-scroll';
import GroupIcon from '@mui/icons-material/Group';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VideocamIcon from '@mui/icons-material/Videocam';
import YouTubeIcon from '@mui/icons-material/YouTube';

import Parser from 'html-react-parser';

import * as S from './Landing.style';
import FeaturedBeat from '../../components/FeaturedBeat/FeaturedBeat';
import SearchField from '../../components/SearchField/SearchField';
import useTypedSelector from '../../hooks/redux/useTypedDispatch';
import Preloader from '../../components/Preloader/Preloader';
import BeatsList from '../../components/BeatsList/BeatsList';
import { ButtonLink } from '../../shared/styles/links';
import { RouterPaths } from '../../shared/router/types';
import useActions from '../../hooks/useActions';
import Visualizer from '../../components/Visualizer/Visualizer';
import ContactForm from '../../components/ContactForm/ContactForm';
import CollabCard from '../../components/CollabCard/CollabCard';
import LicenseCard from '../../components/LicenseCard/LicenseCard';
import SoundKitCard from '../../components/SoundKitCard/SoundKitCard';
import DiscographyCard from '../../components/DiscographyCard/DiscographyCard';
import Button from '../../components/Button/Button';
import useChannelContent from '../../hooks/useChannelContent';

const Landing: FC = memo(() => {
  const { beats, isFetching } = useTypedSelector(state => state.beats);
  const { beats: discographyBeats, isFetching: isDiscographyFetching } =
    useTypedSelector(state => state.discography);
  const { getDiscographyBeats } = useActions();
  const { featuredBeat } = useTypedSelector(state => state.beats);
  const { licenses, isFetching: isLicensesFetching } = useTypedSelector(
    state => state.licenses,
  );
  const { soundKits, isFetching: isSoundKitsFetching } = useTypedSelector(
    state => state.soundKits,
  );
  const { collabs, isFetching: isCollabsFetching } = useTypedSelector(
    state => state.collabs,
  );

  const channel = {
    user: 'UCpi4NSNZrV3oBtgpdaEGeyw',
    video: 'aGwTM0icKg8',
  };

  const { channelContent, channelVideo } = useChannelContent(channel);

  const video = Parser(channelVideo);

  const isFeaturedBeatFetching = !featuredBeat;

  const {
    getFeaturedBeat,
    getLicenses,
    getPreviewSoundKits,
    getPreviewBeats,
    getPreviewCollabs,
  } = useActions();

  const collabsCards = collabs.map(collab => (
    <CollabCard collab={collab} key={collab.id} />
  ));

  const licensesCards = licenses.map(license => (
    <LicenseCard license={license} key={license.id} />
  ));

  const soundKitsCards = soundKits.map(soundKit => (
    <SoundKitCard soundKit={soundKit} key={soundKit.id} />
  ));

  const discographyCards = discographyBeats.map(beat => (
    <DiscographyCard beat={beat} key={beat.id} />
  ));

  useEffect(() => {
    if (!featuredBeat) {
      getFeaturedBeat();
    }
    getPreviewBeats();
    getLicenses();
    getPreviewSoundKits();
    getPreviewCollabs();
    getDiscographyBeats();
  }, []);

  return (
    <S.Landing>
      <S.Intro>
        <S.Container>
          <S.IntroInner>
            <S.IntroTitle>Someone beatstore</S.IntroTitle>
            <S.Search>
              <SearchField initialValues={{ query: '' }}>
                <S.SearchFieldContainer>
                  <S.SearchField
                    name="query"
                    placeholder={'What type of track are you looking for?'}
                  />
                  <S.SearchSubmit>
                    <Button type={'submit'}>Search</Button>
                  </S.SearchSubmit>
                </S.SearchFieldContainer>
              </SearchField>
            </S.Search>
            <S.FeaturedBeat>
              {isFeaturedBeatFetching ? (
                <Preloader />
              ) : (
                <FeaturedBeat beat={featuredBeat} />
              )}
            </S.FeaturedBeat>
          </S.IntroInner>
        </S.Container>
        <S.Visualizer>
          <Visualizer />
        </S.Visualizer>
      </S.Intro>

      <S.Section>
        <S.Container>
          <S.BeatsList>
            {isFetching ? <Preloader /> : <BeatsList beats={beats} />}
          </S.BeatsList>
          <S.DetailsButton>
            <ButtonLink to={RouterPaths.beats}>Browse all tracks</ButtonLink>
          </S.DetailsButton>
        </S.Container>
      </S.Section>

      <S.Licenses>
        <S.Container>
          <S.SectionTitle>Licensing Info</S.SectionTitle>
          <ScrollContainer>
            <S.LicensesList>
              {isLicensesFetching ? <Preloader /> : licensesCards}
            </S.LicensesList>
          </ScrollContainer>
        </S.Container>
      </S.Licenses>

      <S.Section>
        <S.Container>
          <S.SectionTitle>Sound Kits</S.SectionTitle>
          <ScrollContainer>
            <S.SoundKitsList>
              {isSoundKitsFetching ? <Preloader /> : soundKitsCards}
            </S.SoundKitsList>
          </ScrollContainer>

          <S.DetailsButton>
            <ButtonLink to={`${RouterPaths.soundKits}`}>
              Browse all sound kits
            </ButtonLink>
          </S.DetailsButton>
        </S.Container>
      </S.Section>

      <S.Section>
        <S.Container>
          <S.SectionTitle>Services</S.SectionTitle>
          <ScrollContainer>
            <S.CollabsList>
              {isCollabsFetching ? <Preloader /> : collabsCards}
            </S.CollabsList>
          </ScrollContainer>
          <S.DetailsButton>
            <ButtonLink to={`${RouterPaths.collabs}`}>
              Browse all services
            </ButtonLink>
          </S.DetailsButton>
        </S.Container>
      </S.Section>

      <S.Youtube>
        <S.YoutubeContaier>
          <S.YoutubeInner>
            <S.ChannelInfo>
              <S.Info>
                <S.InfoIcon>
                  <GroupIcon />
                </S.InfoIcon>
                <S.InfoTitle>Subscribers</S.InfoTitle>
                <S.InfoText>{channelContent.subscriberCount}</S.InfoText>
              </S.Info>
              <S.Info>
                <S.InfoIcon>
                  <VisibilityIcon />
                </S.InfoIcon>
                <S.InfoTitle>Total views</S.InfoTitle>
                <S.InfoText>{channelContent.viewCount}</S.InfoText>
              </S.Info>
              <S.Info>
                <S.InfoIcon>
                  <VideocamIcon />
                </S.InfoIcon>
                <S.InfoTitle>Videos</S.InfoTitle>
                <S.InfoText>{channelContent.videoCount} </S.InfoText>
              </S.Info>
              <S.Subscribe>
                <S.SubscribeButton
                  href="https://www.youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <YouTubeIcon sx={{ marginRight: 1 }} />
                  Subscribe
                </S.SubscribeButton>
              </S.Subscribe>
            </S.ChannelInfo>
            <S.Video>{video}</S.Video>
          </S.YoutubeInner>
        </S.YoutubeContaier>
      </S.Youtube>

      <S.Section>
        <S.Container>
          <S.SectionTitle>Discography</S.SectionTitle>
          <ScrollContainer vertical={false}>
            <S.DiscographyList>
              {isDiscographyFetching ? <Preloader /> : discographyCards}
            </S.DiscographyList>
          </ScrollContainer>
        </S.Container>
      </S.Section>

      <S.Contact>
        <S.SectionTitle>Contact</S.SectionTitle>
        <S.Container>
          <S.ContactForm>
            <ContactForm />
          </S.ContactForm>
        </S.Container>
      </S.Contact>
    </S.Landing>
  );
});

export default Landing;
