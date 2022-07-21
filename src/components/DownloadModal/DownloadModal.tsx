import { FC } from 'react';
import { useFormik } from 'formik';
import { FormControl, Checkbox, FormControlLabel } from '@mui/material';

import Modal from 'components/Modal/Modal';
import Preloader from 'components/Preloader/Preloader';
import ModalContainer from 'components/ModalContainer/ModalContainer';
import Button from 'components/Button/Button';
import useTypedSelector from 'hooks/redux/useTypedDispatch';
import downloadValidation from 'shared/formValidations/download';
import * as modalsSelectors from 'reduxStore/modals/selectors';
import { ModalsTypes } from 'reduxStore/modals/types';
import * as beatDetailsSelectors from 'reduxStore/beat-details/selectors';

import * as S from './DownloadModal.style';

type DownloadValues = {
  email: string;
  name: string;
  mobilePrefix: string;
  mobilePhone: number | null;
  agree: boolean;
};

const DownloadModal: FC = () => {
  const { downloadModalVisability } = useTypedSelector(
    modalsSelectors.visabilities,
  );
  const beat = useTypedSelector(beatDetailsSelectors.beatDetails);

  const initialDownloadValues: DownloadValues = {
    email: '',
    name: '',
    mobilePrefix: '+7',
    mobilePhone: null,
    agree: false,
  };

  const onDownloadSubmit = (values: DownloadValues) => {
    console.log(values);
  };

  const { handleSubmit, handleBlur, handleChange, touched, values, errors } =
    useFormik({
      initialValues: initialDownloadValues,
      validationSchema: downloadValidation,
      onSubmit: onDownloadSubmit,
    });

  return (
    <S.DownloadModal>
      <ModalContainer
        isOpen={downloadModalVisability}
        modalType={ModalsTypes.download}
      >
        <S.Modal background={beat?.image}>
          {!beat ? (
            <Preloader />
          ) : (
            <Modal
              isOpen={downloadModalVisability}
              title={`Download: ${beat.title}`}
              modalType={ModalsTypes.download}
            >
              <S.Content>
                <S.Tip>
                  We will send your free track to the email address you provide
                  below. Thanks!
                </S.Tip>
                <S.Form onSubmit={handleSubmit}>
                  <S.CommonTextField
                    label="Email"
                    name="email"
                    variant="outlined"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                    error={errors.email}
                    touched={touched.email}
                  />
                  <S.CommonTextField
                    label="Name"
                    variant="outlined"
                    name="name"
                    onChange={handleChange}
                    value={values.name}
                    error={errors.name}
                    touched={touched.name}
                  />
                  <S.PhoneTextFields>
                    <FormControl>
                      <S.PhonePrefix
                        value={values.mobilePrefix}
                        onChange={handleChange}
                        name="mobilePrefix"
                      >
                        <S.Prefix value="+7">+7 RU</S.Prefix>
                      </S.PhonePrefix>
                    </FormControl>

                    <S.CommonTextField
                      label="Phone number(optional)"
                      name="mobilePhone"
                      type="number"
                      variant="outlined"
                      onChange={handleChange}
                      value={values.mobilePhone}
                    />
                  </S.PhoneTextFields>
                  <FormControlLabel
                    value={values.agree}
                    control={<Checkbox onChange={handleChange} name="agree" />}
                    label="Yes, I would like to receive free tracks to the email address provided above."
                  />
                  <S.Submit>
                    <Button type="submit">Send beat to your e-mail</Button>
                  </S.Submit>
                </S.Form>
              </S.Content>
            </Modal>
          )}
        </S.Modal>
      </ModalContainer>
    </S.DownloadModal>
  );
};

export default DownloadModal;
