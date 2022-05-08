import { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import DiscographyList from '../../components/DiscographyList/DiscographyList';
import Preloader from '../../components/Preloader/Preloader';
import useTypedSelector from '../../hooks/redux/useTypedDispatch';
import useActions from '../../hooks/useActions';
import * as S from './About.style';
import GallaryImage from './images/gallery-image.jpg';
import 'swiper/css';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';

const About = () => {
  const { getDiscographyBeats } = useActions();
  const { beats, isFetching } = useTypedSelector(state => state.discography);

  const gallary = [GallaryImage, GallaryImage, GallaryImage];

  useEffect(() => {
    getDiscographyBeats();
  }, []);

  const gallarySlides = gallary.map((image,index) => (
    <SwiperSlide key={index}>
      <S.GallaryImage src={image} />
    </SwiperSlide>
  ));

  return (
    <S.About>
      <S.Container>
        <S.Title>About</S.Title>
        <S.Biography>
          <S.SectionTitle>Biography</S.SectionTitle>
          <S.BiographyText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </S.BiographyText>
          <S.BiographyImage
            src={require('./images/biography-image.png')}
          ></S.BiographyImage>
        </S.Biography>
        <S.Discography>
          <S.SectionTitle>Discography</S.SectionTitle>
          {isFetching ? <Preloader /> : <DiscographyList beats={beats} />}
        </S.Discography>
        <S.Gallary>
          <S.SectionTitle>Gallery</S.SectionTitle>
          <Swiper spaceBetween={50} slidesPerView={2} loop>
            {gallarySlides}
          </Swiper>
        </S.Gallary>
      </S.Container>
    </S.About>
  );
};

export default About;
