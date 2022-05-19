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

import * as S from './BeatForm.style';

const BeatForm = memo(() => {
  const { id } = useParams();
  const { getBeat } = useActions();
  const { beat } = useTypedSelector(state => state.beats);

  const initialValues = {
    title: '',
    bpm: 0,
    date: new Date(),
    time: '00:00',
    chord: '',
    price: 0,
  };

  const onCreateSubmit = (values: Beat) => {
    console.log(values);
  };

  const formik = useFormik({
    onSubmit: onCreateSubmit,
    initialValues,
  });

  const onDateChange = (date: Date | null) => {
    formik.setFieldValue('date', date);
  };

  const onTimeChange = (time: string | null) => {
    formik.setFieldValue('time', time);
  };

  useEffect(() => {
    if (id) {
      getBeat(Number(id));
    }
    if (beat) {
      formik.setValues(beat);
    }
  }, [beat?.id]);

  return (
    <S.BeatForm onSubmit={formik.handleSubmit}>
      <TextField
        label="title"
        name="title"
        variant="standard"
        value={formik.values.title || formik.initialValues.title}
        onChange={formik.handleChange}
      />
      <TextField
        label="BPM"
        name="bpm"
        type="number"
        variant="standard"
        value={formik.values.bpm || formik.initialValues.bpm}
        onChange={formik.handleChange}
      />
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DatePicker
          label="Date"
          onChange={onDateChange}
          value={formik.values.date || formik.initialValues.date}
          renderInput={params => (
            <TextField {...params} name="date" variant="standard" />
          )}
        />
      </LocalizationProvider>
      <LocalizationProvider dateAdapter={AdapterDateFns} locale={ruLocale}>
        <TimePicker
          label="Time"
          value={formik.values.time || formik.initialValues.time}
          inputFormat="mm:ss"
          views={['minutes', 'seconds']}
          onChange={onTimeChange}
          renderInput={params => (
            <TextField {...params} name="time" variant="standard" />
          )}
        />
      </LocalizationProvider>

      <TextField
        label="Price"
        name="price"
        value={formik.values.price || formik.initialValues.price}
        type="number"
        variant="standard"
        onChange={formik.handleChange}
      />

      <TextField
        label="Chord"
        name="chord"
        value={formik.values.chord || formik.initialValues.chord}
        variant="standard"
        onChange={formik.handleChange}
      />

      <S.Submit>
        <Button type="submit">Create</Button>
      </S.Submit>
    </S.BeatForm>
  );
});

export default BeatForm;
