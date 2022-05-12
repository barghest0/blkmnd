import { FC } from 'react';

import * as S from './ModalContainer.style';

import useActions from '../../hooks/useActions';
import { ModalsTypes } from '../../redux/modals/types';

type Props = {
  children: JSX.Element;
  isOpen: boolean;
  modalType: ModalsTypes;
};

type ModalContainerProps = {
  isOpen: boolean;
};

const ModalContainer: FC<Props> = ({ children, isOpen, modalType }) => {
  const { setModalVisability } = useActions();

  const onContainerClick = () => {
    setModalVisability({ visability: false, modalType });
    document.body.style.overflow = 'auto';
  };

  return (
    <S.ModalContainer isOpen={isOpen} onClick={onContainerClick}>
      {children}
    </S.ModalContainer>
  );
};

export { ModalContainerProps };
export default ModalContainer;