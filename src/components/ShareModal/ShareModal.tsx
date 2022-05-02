import { FC } from 'react';

import Modal from '../Modal/Modal';

type Props = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  link: string;
};

const ShareModal: FC<Props> = ({ isOpen, setIsOpen, link }) => {
  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      {link}
    </Modal>
  );
};

export default ShareModal;
