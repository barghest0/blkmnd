import { FC } from 'react';

import * as S from './ShareModal.style';

import useTypedSelector from '../../hooks/redux/useTypedDispatch';
import { ModalsTypes } from '../../redux/modals/types';

import Modal from '../Modal/Modal';
import Preloader from '../Preloader/Preloader';

const ShareModal: FC = () => {
  const { isShareOpen, beat } = useTypedSelector(state => state.modals);

  return (
    <S.ShareModal>
      <Modal isOpen={isShareOpen} modalType={ModalsTypes.share}>
        {!beat ? <Preloader /> : beat.title}
      </Modal>
    </S.ShareModal>
  );
};

export default ShareModal;
