import { FC } from 'react';

import * as S from './DownloadModal.style';

import Modal from '../Modal/Modal';
import Preloader from '../Preloader/Preloader';
import { ModalsTypes } from '../../redux/modals/types';
import useTypedSelector from '../../hooks/redux/useTypedDispatch';
import ModalContainer from '../ModalContainer/ModalContainer';
import { useFormik } from 'formik';
import { FormControl, Checkbox, FormControlLabel } from '@mui/material';
import Button from '../Button/Button';
import downloadValidation from '../../shared/formValidations/download';
import * as modalsSelectors from '../../redux/modals/selectors';
import * as beatsSelectors from '../../redux/beats/selectors';

type DownloadModalProps = {
  background?: string;
};

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
  const { beat } = useTypedSelector(beatsSelectors.separatedBeats);

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
                  <S.Field
                    name="email"
                    type="text"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                    error={touched.email && Boolean(errors.email)}
                    helperText={touched.email && errors.email}
                    variant="outlined"
                    label="Email"
                  />
                  <S.Field
                    name="name"
                    type="text"
                    onChange={handleChange}
                    value={values.name}
                    error={touched.name && Boolean(errors.name)}
                    helperText={touched.name && errors.name}
                    variant="outlined"
                    label="Name"
                  />
                  <S.PhoneFields>
                    <FormControl>
                      <S.PhonePrefix
                        value={values.mobilePrefix}
                        onChange={handleChange}
                        name="mobilePrefix"
                      >
                        <S.Prefix value={'+7'}>+7 RU</S.Prefix>
                      </S.PhonePrefix>
                    </FormControl>

                    <S.Field
                      name="mobilePhone"
                      type="number"
                      onChange={handleChange}
                      variant="outlined"
                      label="Phone number(optional)"
                    />
                  </S.PhoneFields>
                  <FormControlLabel
                    value={values.agree}
                    control={<Checkbox onChange={handleChange} name="agree" />}
                    label="Yes, I would like to receive free tracks to the email address provided above."
                  />
                  <S.Submit>
                    <Button type={'submit'}>Send beat to your e-mail</Button>
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
export { DownloadModalProps };
export default DownloadModal;
