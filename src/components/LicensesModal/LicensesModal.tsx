import { FC } from 'react';
import useTypedSelector from '../../hooks/redux/useTypedDispatch';
import { ModalsTypes } from '../../redux/modals/types';
import Modal from '../Modal/Modal';
import ModalContainer from '../ModalContainer/ModalContainer';
import Preloader from '../Preloader/Preloader';
import * as S from './LicensesModal.style';
import * as modalSelectors from '../../redux/modals/selectors';
import * as licensesSelectors from '../../redux/licenses/selectors';

const LicensesModal: FC = () => {
  const { licenseModalVisability } = useTypedSelector(
    modalSelectors.visabilities,
  );

  const license = useTypedSelector(licensesSelectors.license);

  return (
    <S.LicensesModal>
      <ModalContainer
        isOpen={licenseModalVisability}
        modalType={ModalsTypes.license}
      >
        <S.Modal>
          {!license ? (
            <Preloader />
          ) : (
            <Modal
              isOpen={licenseModalVisability}
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
