import { FC } from 'react';

import * as S from './DownloadModal.style';

import Modal from '../Modal/Modal';
import Preloader from '../Preloader/Preloader';
import { ModalsTypes } from '../../redux/modals/types';
import useTypedSelector from '../../hooks/redux/useTypedDispatch';

const DownloadModal: FC = () => {
  const { isDownloadOpen, beat } = useTypedSelector(state => state.modals);

  const isBeatFetching = !beat;

  return (
    <S.DownloadModal>
      <Modal isOpen={isDownloadOpen} modalType={ModalsTypes.download}>
        {isBeatFetching ? (
          <Preloader />
        ) : (
          <>
            <S.Background src={beat.image} />
            <S.Content>
              <S.Title>Download: {beat.title}</S.Title>
            </S.Content>
          </>
        )}
      </Modal>
    </S.DownloadModal>
  );
};

export default DownloadModal;
