import * as S from './BuyModal.style';

import Modal from '../Modal/Modal';
import useTypedSelector from '../../hooks/redux/useTypedDispatch';
import Preloader from '../Preloader/Preloader';
import { ModalsTypes } from '../../redux/modals/types';

const BuyModal = () => {
  const { beat, isBuyOpen } = useTypedSelector(state => state.modals);

  return (
    <S.BuyModal>
      <Modal isOpen={isBuyOpen} modalType={ModalsTypes.buy}>
        {!beat ? <Preloader /> : beat.title}
      </Modal>
    </S.BuyModal>
  );
};

export default BuyModal;
