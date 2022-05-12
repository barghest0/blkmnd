import { FC, SyntheticEvent } from 'react';
import * as S from './Modal.style';

type Props = {
  children: React.ReactNode;
  isOpen: boolean;
};

type ModalProps = {
  isOpen: boolean;
};

const Modal: FC<Props> = ({ children, isOpen }) => {
  const onContentClick = (event: SyntheticEvent) => {
    event.stopPropagation();
  };

  return (
    <S.Modal onClick={onContentClick} isOpen={isOpen}>
      {children}
    </S.Modal>
  );
};

export default Modal;
export { ModalProps };
