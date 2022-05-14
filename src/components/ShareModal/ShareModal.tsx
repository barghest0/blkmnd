import { FC } from 'react';

import * as S from './ShareModal.style';

import useTypedSelector from '../../hooks/redux/useTypedDispatch';
import { ModalsTypes } from '../../redux/modals/types';

import Modal from '../Modal/Modal';
import Preloader from '../Preloader/Preloader';
import ModalContainer from '../ModalContainer/ModalContainer';

const ShareModal: FC = () => {
  const { isShareOpen, beat } = useTypedSelector(state => state.modals);

  return (
    <S.ShareModal>
      <ModalContainer isOpen={isShareOpen} modalType={ModalsTypes.share}>
        <S.Modal>
          {!beat ? (
            <Preloader />
          ) : (
            <Modal
              isOpen={isShareOpen}
              title={beat.title}
              modalType={ModalsTypes.share}
            >
              <S.Content></S.Content>
            </Modal>
          )}
        </S.Modal>
      </ModalContainer>
    </S.ShareModal>
  );
};

export default ShareModal;
