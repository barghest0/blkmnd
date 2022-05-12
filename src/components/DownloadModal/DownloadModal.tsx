import { FC } from 'react';

import * as S from './DownloadModal.style';

import Modal from '../Modal/Modal';
import Preloader from '../Preloader/Preloader';
import { ModalsTypes } from '../../redux/modals/types';
import useTypedSelector from '../../hooks/redux/useTypedDispatch';
import ModalContainer from '../ModalContainer/ModalContainer';

type DownloadModalProps = {
  background?: string;
};

const DownloadModal: FC = () => {
  const { isDownloadOpen, beat } = useTypedSelector(state => state.modals);

  const isBeatFetching = !beat;

  return (
    <S.DownloadModal>
      <ModalContainer isOpen={isDownloadOpen} modalType={ModalsTypes.download}>
        <S.Modal background={beat?.image}>
          <Modal isOpen={isDownloadOpen}>
            {isBeatFetching ? (
              <Preloader />
            ) : (
              <S.Content>
                <S.Inner>
                  <S.Title>Download: {beat.title}</S.Title>
                </S.Inner>
              </S.Content>
            )}
          </Modal>
        </S.Modal>
      </ModalContainer>
    </S.DownloadModal>
  );
};
export { DownloadModalProps };
export default DownloadModal;
