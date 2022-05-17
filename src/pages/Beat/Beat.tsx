import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PlayButton from '../../components/PlayButton/PlayButton';
import Preloader from '../../components/Preloader/Preloader';
import Visualizer from '../../components/Visualizer/Visualizer';
import useTypedSelector from '../../hooks/redux/useTypedDispatch';
import useActions from '../../hooks/useActions';
import * as S from './Beat.style';

const Beat = () => {
  const params = useParams();

  const { beat } = useTypedSelector(state => state.beats);

  const { getBeat, setBeat, openPlayer, togglePlaying } = useActions();

  const onPlayButtonClick = () => {
    if (beat) {
      openPlayer();
      togglePlaying(beat);
      setBeat(beat);
    }
  };

  useEffect(() => {
    getBeat(Number(params.id));
  }, []);

  return (
    <S.Beat>
      <S.Container>
        {!beat ? (
          <Preloader />
        ) : (
          <S.Content>
            <S.Thumbnail src={beat.image} onClick={onPlayButtonClick} />
            <S.TitleContainer onClick={onPlayButtonClick}>
              <S.PlayButton>
                <PlayButton currentBeat={beat} />
              </S.PlayButton>
              <S.Title>{beat.title}</S.Title>
            </S.TitleContainer>
            <S.Musician>{beat.musician.name}</S.Musician>
          </S.Content>
        )}
        <S.Visualizer>
          <Visualizer />
        </S.Visualizer>
      </S.Container>
    </S.Beat>
  );
};

export default Beat;
