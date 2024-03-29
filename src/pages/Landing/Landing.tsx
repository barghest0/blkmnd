import { FC, memo, useEffect } from 'react';
import ScrollContainer from 'react-indiana-drag-scroll';
import Parser from 'html-react-parser';
import GroupIcon from '@mui/icons-material/Group';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VideocamIcon from '@mui/icons-material/Videocam';
import YouTubeIcon from '@mui/icons-material/YouTube';

import FeaturedBeat from 'components/FeaturedBeat/FeaturedBeat';
import Preloader from 'components/Preloader/Preloader';
import BeatsList from 'components/BeatsList/BeatsList';
import Visualizer from 'components/Visualizer/Visualizer';
import ContactForm from 'components/ContactForm/ContactForm';
import ServiceCard from 'components/ServiceCard/ServiceCard';
import LicenseCard from 'components/LicenseCard/LicenseCard';
import SoundKitCard from 'components/SoundKitCard/SoundKitCard';
import DiscographyCard from 'components/DiscographyCard/DiscographyCard';
import Button from 'components/Button/Button';
import useChannelContent from 'hooks/useChannelContent';
import useSearch from 'hooks/useSearch';
import useActions from 'hooks/useActions';
import { ButtonLink } from 'shared/styles/links';
import { RouterPaths } from 'shared/router/types';
import useTypedSelector from 'hooks/redux/useTypedDispatch';
import * as landingSelectors from 'reduxStore/landing/selectors';
import * as discographySelectors from 'reduxStore/discography/selectors';

import * as S from './Landing.style';

const Landing: FC = memo(() => {
  const { featuredBeat, previewBeats } = useTypedSelector(
    landingSelectors.beats,
  );
  const licenses = useTypedSelector(landingSelectors.licenses);
  const soundKits = useTypedSelector(landingSelectors.soundKits);
  const services = useTypedSelector(landingSelectors.services);

  const {
    isPreviewBeatsFetching,
    isLicensesFetching,
    isPreviewServicesFetching,
    isPreviewSoundKitsFetching,
    isFeaturedBeatFetching,
  } = useTypedSelector(landingSelectors.landingFetchings);

  const discographyBeats = useTypedSelector(
    discographySelectors.allDiscographyBeats,
  );
  const isDiscographyFetching = useTypedSelector(
    discographySelectors.isDiscographyFetching,
  );

  const channel = {
    user: 'UCpi4NSNZrV3oBtgpdaEGeyw',
    video: 'aGwTM0icKg8',
  };

  const { channelContent, channelVideo } = useChannelContent(channel);

  const video = Parser(channelVideo);

  const {
    getFeaturedBeat,
    getLicenses,
    getPreviewSoundKits,
    getPreviewBeats,
    getPreviewServices,
    getDiscographyBeats,
  } = useActions();

  const servicesCards = services.map((service) => (
    <ServiceCard service={service} key={service.id} />
  ));

  const licensesCards = licenses.map((license) => (
    <LicenseCard license={license} key={license.id} />
  ));

  const soundKitsCards = soundKits.map((soundKit) => (
    <SoundKitCard soundKit={soundKit} key={soundKit.id} />
  ));

  const discographyCards = discographyBeats.map((beat) => (
    <DiscographyCard beat={beat} key={beat.id} />
  ));

  const { searchValue, onSearchSubmit, searchFieldName, onSearchChange } =
    useSearch({
      initialValue: '',
      searchPath: RouterPaths.beats,
    });

  useEffect(() => {
    if (!featuredBeat) {
      getFeaturedBeat();
    }
    getPreviewBeats();
    getLicenses();
    getPreviewSoundKits();
    getPreviewServices();
    getDiscographyBeats();
  }, []);

  return (
    <S.Landing>
      <S.Intro>
        <S.Container>
          <S.IntroInner>
            <S.IntroTitle>Someone beatstore</S.IntroTitle>
            <S.Search onSubmit={onSearchSubmit}>
              <S.SearchFieldContainer>
                <S.SearchField
                  name={searchFieldName}
                  placeholder="What type of track are you looking for?"
                  onChange={onSearchChange}
                  value={searchValue}
                />
                <S.SearchSubmit>
                  <Button type="submit">Search</Button>
                </S.SearchSubmit>
              </S.SearchFieldContainer>
            </S.Search>
            <S.FeaturedBeat>
              {!isFeaturedBeatFetching && featuredBeat ? (
                <FeaturedBeat beat={featuredBeat} />
              ) : (
                <Preloader />
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
            {isPreviewBeatsFetching ? (
              <Preloader />
            ) : (
              <BeatsList beats={previewBeats} />
            )}
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
              {isPreviewSoundKitsFetching ? <Preloader /> : soundKitsCards}
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
            <S.ServicesList>
              {isPreviewServicesFetching ? <Preloader /> : servicesCards}
            </S.ServicesList>
          </ScrollContainer>
          <S.DetailsButton>
            <ButtonLink to={`${RouterPaths.services}`}>
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
