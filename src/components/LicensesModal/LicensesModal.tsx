import { FC } from 'react';

import Modal from 'components/Modal/Modal';
import ModalContainer from 'components/ModalContainer/ModalContainer';
import Preloader from 'components/Preloader/Preloader';
import useTypedSelector from 'hooks/redux/useTypedDispatch';
import * as modalSelectors from 'reduxStore/modals/selectors';
import { ModalsTypes } from 'reduxStore/modals/types';
import * as licensesSelectors from 'reduxStore/licenses/selectors';

import * as S from './LicensesModal.style';

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
