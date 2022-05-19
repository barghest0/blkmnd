import { TextField } from '@mui/material';
import ruLocale from 'date-fns/locale/ru';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import {
  DatePicker,
  LocalizationProvider,
  TimePicker,
} from '@mui/x-date-pickers';

import { useFormik } from 'formik';
import { memo, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useTypedSelector from '../../hooks/redux/useTypedDispatch';
import useActions from '../../hooks/useActions';

import { Beat } from '../../redux/beats/types';
import Button from '../Button/Button';

import * as S from './SoundKitForm.style';

const SoundKitForm = memo(() => {
  const { id } = useParams();
  const { getSoundKit } = useActions();
  const { soundKit } = useTypedSelector(state => state.soundKits);

  const initialValues = {
    title: '',
  };

  const onCreateSubmit = (values: Beat) => {
    console.log(values);
  };

  const formik = useFormik({
    onSubmit: onCreateSubmit,
    initialValues,
  });

  useEffect(() => {
    if (id) {
      getSoundKit(Number(id));
    }
    if (soundKit) {
      formik.setValues(soundKit);
    }
  }, [soundKit?.id]);

  return (
    <S.SoundKitForm onSubmit={formik.handleSubmit}>
      <TextField
        label="title"
        name="title"
        variant="standard"
        value={formik.values.title || formik.initialValues.title}
        onChange={formik.handleChange}
      />
      <S.Submit>
        <Button type="submit">Create</Button>
      </S.Submit>
    </S.SoundKitForm>
  );
});

export default SoundKitForm;
