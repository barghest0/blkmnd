import { useEffect } from 'react';
import DiscographyList from '../../components/DiscographyList/DiscographyList';
import Preloader from '../../components/Preloader/Preloader';
import useTypedSelector from '../../hooks/redux/useTypedDispatch';
import useActions from '../../hooks/useActions';
import * as S from './About.style';

const About = () => {
  const { getDiscographyBeats } = useActions();
  const { beats, isFetching } = useTypedSelector(state => state.discography);

  useEffect(() => {
    getDiscographyBeats();
  }, []);

  return (
    <S.About>
      <S.Container>
        <S.Title>About</S.Title>
        <S.Biography>
          <S.SectionTitle>Biography</S.SectionTitle>
          <S.BiographyText>something biography</S.BiographyText>
          <S.BiographyImage
            src={require('./images/biography-image.png')}
          ></S.BiographyImage>
        </S.Biography>
        <S.Discography>
          <S.SectionTitle>Discography</S.SectionTitle>
          {isFetching ? <Preloader /> : <DiscographyList beats={beats} />}
        </S.Discography>
      </S.Container>
    </S.About>
  );
};

export default About;
