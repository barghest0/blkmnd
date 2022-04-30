import { FC } from 'react';
import { Beat } from '../../redux/beats/types';

type Props = {
  beat: Beat;
};

const PreviewBeat: FC<Props> = ({ beat }) => {
  const { title } = beat;
  return <div>{title}</div>;
};

export default PreviewBeat;
