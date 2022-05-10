import { FC, SyntheticEvent } from 'react';
import useActions from '../../hooks/useActions';
import { ModalsTypes } from '../../redux/modals/types';
import * as S from './Modal.style';

type Props = {
  children: React.ReactNode;
  isOpen: boolean;
  modalType: ModalsTypes;
};

type ModalProps = {
  isOpen: boolean;
};

const Modal: FC<Props> = ({ children, isOpen, modalType }) => {
  const { setModalVisability } = useActions();

  const onBackgrounClick = () => {
    setModalVisability({ visability: false, modalType });
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
