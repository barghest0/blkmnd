import { FC, SyntheticEvent } from 'react';
import * as S from './Modal.style';

type Props = {
  children: React.ReactNode;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
};

type ModalProps = {
  isOpen: boolean;
};

const Modal: FC<Props> = ({ children, isOpen, setIsOpen }) => {
  const onBackgrounClick = () => {
    setIsOpen(false);
    document.body.style.overflow = 'auto';
  };

  const onContentClick = (event: SyntheticEvent) => {
    event.stopPropagation();
  };

  return (
    <S.Modal isOpen={isOpen} onClick={onBackgrounClick}>
      <S.Content onClick={onContentClick} isOpen={isOpen}>
        {children}
      </S.Content>
    </S.Modal>
  );
};

export default Modal;
export { ModalProps };
