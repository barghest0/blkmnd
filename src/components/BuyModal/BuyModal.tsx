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

import * as S from './BuyModal.style';

const BuyModal = () => {
  const { buyModalVisability } = useTypedSelector(
    modalsSelectors.modalsVisabilities,
  );
  const { modalBeat } = useTypedSelector(modalsSelectors.modalDetails);

  const licensesCards = modalBeat?.licenses.map((license) => (
    <ChooseLicenseCard license={license} beat={modalBeat} key={license.id} />
  ));

  const { setBeat, openPlayer, togglePlaying } = useActions();

  const onPlayButtonClick = () => {
    if (modalBeat) {
      openPlayer();
      togglePlaying(modalBeat);
      setBeat(modalBeat);
    }
  };

  return (
    <S.BuyModal>
      <ModalContainer isOpen={buyModalVisability} modalType={ModalsTypes.buy}>
        <S.Modal>
          {!modalBeat ? (
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
                      <Image image={modalBeat.image} />
                    </S.Thumbnail>
                    <S.PlayButton>
                      <PlayButton currentBeat={modalBeat} />
                    </S.PlayButton>
                  </S.ThumbnailContainer>
                  <S.Title>{modalBeat.title}</S.Title>
                  <S.Musician>{modalBeat.musician.name}</S.Musician>
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
