import { FC, SyntheticEvent } from 'react';

import useActions from 'hooks/useActions';
import { ModalsTypes } from 'reduxStore/modals/types';

import * as S from './Modal.style';

type Props = {
  children: React.ReactNode;
  isOpen: boolean;
  title: string;
  modalType: ModalsTypes;
};

type ModalProps = {
  isOpen: boolean;
};

const Modal: FC<Props> = ({
 children, isOpen, title, modalType 
}) => {
  const { setModalVisability } = useActions();

  const onContentClick = (event: SyntheticEvent) => {
    event.stopPropagation();
  };

  const onCloseButtonClick = () => {
    setModalVisability({ visability: false, modalType });
    document.body.style.overflow = 'auto';
  };

  return (
    <S.Modal onClick={onContentClick} isOpen={isOpen}>
      <S.Inner>
        <S.Header>
          <S.Title>{title}</S.Title>
          <S.CloseButton onClick={onCloseButtonClick} />
        </S.Header>
        <S.Content>{children}</S.Content>
      </S.Inner>
    </S.Modal>
  );
};

export default Modal;
export { ModalProps };
