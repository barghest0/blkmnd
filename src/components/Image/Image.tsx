import { FC } from 'react';
import useImagePreloader from '../../hooks/useImagePreloader';
import * as S from './Image.style';

type Props = {
  image: string;
};

const Image: FC<Props> = ({ image }) => {
  const isLoad = useImagePreloader(image);
  return !isLoad ? <S.Overlay></S.Overlay> : <S.Image src={image} />;
};

export default Image;
