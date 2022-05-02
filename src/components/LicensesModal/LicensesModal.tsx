import { FC } from 'react';
import { Beat } from '../../redux/beat/types';
import Modal from '../Modal/Modal';
import * as S from './LicensesModal.style';

type Props = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  beat: Beat | null;
};

const LicensesModal: FC<Props> = ({ isOpen, setIsOpen, beat }) => {
  return (
    <S.LicensesModal>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
        {beat?.title}
      </Modal>
    </S.LicensesModal>
  );
};

export default LicensesModal;
