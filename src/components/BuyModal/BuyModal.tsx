import * as S from './BuyModal.style';

import Modal from '../Modal/Modal';
import useTypedSelector from '../../hooks/redux/useTypedDispatch';
import Preloader from '../Preloader/Preloader';
import { ModalsTypes } from '../../redux/modals/types';
import ModalContainer from '../ModalContainer/ModalContainer';
import PlayButton from '../PlayButton/PlayButton';
import ChooseLicenseCard from '../ChooseLicenseCard/ChooseLicenseCard';
import Image from '../Image/Image';
import useActions from '../../hooks/useActions';
import * as modalsSelectors from '../../redux/modals/selectors';
import * as beatsSelectors from '../../redux/beats/selectors';

const BuyModal = () => {
  const { buyModalVisability } = useTypedSelector(modalsSelectors.visabilities);
  const { beat } = useTypedSelector(beatsSelectors.separatedBeats);

  const licensesCards = beat?.licenses.map(license => (
    <ChooseLicenseCard license={license} beat={beat} key={license.id} />
  ));

  const { setBeat, openPlayer, togglePlaying } = useActions();

  const onPlayButtonClick = () => {
    if (beat) {
      openPlayer();
      togglePlaying(beat);
      setBeat(beat);
    }
  };

  return (
    <S.BuyModal>
      <ModalContainer isOpen={buyModalVisability} modalType={ModalsTypes.buy}>
        <S.Modal>
          {!beat ? (
            <Preloader />
          ) : (
            <Modal
              isOpen={buyModalVisability}
              title={'Choose license type'}
              modalType={ModalsTypes.buy}
            >
              <S.Content>
                <S.Beat onClick={onPlayButtonClick}>
                  <S.ThumbnailContainer>
                    <S.Thumbnail>
                      <Image image={beat.image} />
                    </S.Thumbnail>
                    <S.PlayButton>
                      <PlayButton currentBeat={beat} />
                    </S.PlayButton>
                  </S.ThumbnailContainer>
                  <S.Title>{beat.title}</S.Title>
                  <S.Musician>{beat.musician.name}</S.Musician>
                </S.Beat>
                <S.Licenses>{licensesCards}</S.Licenses>
              </S.Content>
            </Modal>
          )}
        </S.Modal>
      </ModalContainer>
    </S.BuyModal>
  );
};

export default BuyModal;
