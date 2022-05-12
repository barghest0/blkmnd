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
          <Modal isOpen={isBuyOpen}>
            {!beat ? (
              <Preloader />
            ) : (
              <S.Content>
                <S.Title>{beat.title}</S.Title>
              </S.Content>
            )}
          </Modal>
        </S.Modal>
      </ModalContainer>
    </S.BuyModal>
  );
};

export default BuyModal;
