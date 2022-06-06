import Modal from 'components/Modal/Modal';
import Preloader from 'components/Preloader/Preloader';
import ModalContainer from 'components/ModalContainer/ModalContainer';
import PlayButton from 'components/PlayButton/PlayButton';
import ChooseLicenseCard from 'components/ChooseLicenseCard/ChooseLicenseCard';
import Image from 'components/Image/Image';
import useActions from 'hooks/useActions';
import useTypedSelector from 'hooks/redux/useTypedDispatch';
import * as modalsSelectors from 'reduxStore/modals/selectors';
import { ModalsTypes } from 'reduxStore/modals/types';
import * as beatsSelectors from 'reduxStore/beats/selectors';

import * as S from './BuyModal.style';

function BuyModal() {
  const { buyModalVisability } = useTypedSelector(modalsSelectors.visabilities);
  const { beat } = useTypedSelector(beatsSelectors.separatedBeats);

  const licensesCards = beat?.licenses.map((license) => (
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
              title="Choose license type"
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
}

export default BuyModal;
