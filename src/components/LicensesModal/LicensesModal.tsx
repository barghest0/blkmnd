import { FC } from 'react';
import useTypedSelector from '../../hooks/redux/useTypedDispatch';
import { ModalsTypes } from '../../redux/modals/types';
import Modal from '../Modal/Modal';
import ModalContainer from '../ModalContainer/ModalContainer';
import Preloader from '../Preloader/Preloader';
import * as S from './LicensesModal.style';

const LicensesModal: FC = () => {
  const { isLicenseOpen } = useTypedSelector(state => state.modals);
  const { license } = useTypedSelector(state => state.licenses);

  return (
    <S.LicensesModal>
      <ModalContainer isOpen={isLicenseOpen} modalType={ModalsTypes.license}>
        <S.Modal>
          {!license ? (
            <Preloader />
          ) : (
            <Modal
              isOpen={isLicenseOpen}
              title={`${license.name} license preview`}
              modalType={ModalsTypes.license}
            >
              <S.Content>
                <S.Title></S.Title>
              </S.Content>
            </Modal>
          )}
        </S.Modal>
      </ModalContainer>
    </S.LicensesModal>
  );
};

export default LicensesModal;
