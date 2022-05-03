import { FC } from 'react';

import * as S from './DownloadModal.style';
import { Beat } from '../../redux/beat/types';

import Modal from '../Modal/Modal';
import Preloader from '../Preloader/Preloader';

type Props = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  beat: Beat | null;
};

const DownloadModal: FC<Props> = ({ isOpen, setIsOpen, beat }) => {
  const isBeatFetching = !beat;

  return (
    <S.DownloadModal>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
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
