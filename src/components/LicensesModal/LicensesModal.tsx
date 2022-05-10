import { FC } from 'react';
import useTypedSelector from '../../hooks/redux/useTypedDispatch';
import { ModalsTypes } from '../../redux/modals/types';
import Modal from '../Modal/Modal';
import Preloader from '../Preloader/Preloader';
import * as S from './LicensesModal.style';

const LicensesModal: FC = () => {
  const { isLicenseOpen, license } = useTypedSelector(state => state.modals);

  return (
    <S.LicensesModal>
      <Modal isOpen={isLicenseOpen} modalType={ModalsTypes.license}>
        {!license ? <Preloader /> : license?.name}
      </Modal>
    </S.LicensesModal>
  );
};

export default LicensesModal;
