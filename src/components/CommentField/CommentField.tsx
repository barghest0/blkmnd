import { useFormik } from 'formik';
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

  const formik = useFormik({ initialValues, onSubmit: onCommentSubmit });

  return (
    <S.CommentField onSubmit={formik.handleSubmit}>
      <S.Avatar alt={'avatar'} />
      <S.CommentInput name="comment" placeholder="Write a comment..." />
      <S.Submit>
        <Button type="submit">send</Button>
      </S.Submit>
    </S.CommentField>
  );
};

export default CommentField;
