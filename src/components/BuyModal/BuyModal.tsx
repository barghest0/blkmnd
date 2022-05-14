import * as S from './BuyModal.style';

import Modal from '../Modal/Modal';
import useTypedSelector from '../../hooks/redux/useTypedDispatch';
import Preloader from '../Preloader/Preloader';
import { ModalsTypes } from '../../redux/modals/types';
import ModalContainer from '../ModalContainer/ModalContainer';

const BuyModal = () => {
  const { beat, isBuyOpen } = useTypedSelector(state => state.modals);

  return (
    <S.BuyModal>
      <ModalContainer isOpen={isBuyOpen} modalType={ModalsTypes.buy}>
        <S.Modal>
          {!beat ? (
            <Preloader />
          ) : (
            <Modal
              isOpen={isBuyOpen}
              title={beat.title}
              modalType={ModalsTypes.buy}
            >
              <S.Content></S.Content>
            </Modal>
          )}
        </S.Modal>
      </ModalContainer>
    </S.BuyModal>
  );
};

export default BuyModal;
