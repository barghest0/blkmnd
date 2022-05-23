import { TextField } from '@mui/material';
import { useFormik } from 'formik';
import commentValidation from '../../shared/formValidations/comment';
import Button from '../Button/Button';
import * as S from './CommentField.style';

type CommentValues = {
  comment: string;
};

const CommentField = () => {
  const initialValues = {
    comment: '',
  };

  const onCommentSubmit = (values: CommentValues) => {
    console.log(values);
  };

  const formik = useFormik({
    initialValues,
    validationSchema: commentValidation,
    onSubmit: onCommentSubmit,
  });

  return (
    <S.CommentField onSubmit={formik.handleSubmit}>
      <S.Avatar alt={'avatar'} />
      <TextField
        name="comment"
        placeholder="Write a comment..."
        onChange={formik.handleChange}
        value={formik.values.comment}
        error={formik.touched.comment && Boolean(formik.errors.comment)}
        helperText={formik.touched.comment && formik.errors.comment}
        variant="standard"
      />
      <S.Submit>
        <Button type="submit">send</Button>
      </S.Submit>
    </S.CommentField>
  );
};

export default CommentField;
