import { FC } from 'react';
import { SoundKit } from '../../redux/soundKits/types';

type Props = {
  kits: SoundKit[];
};
const SoundKits: FC<Props> = ({ kits }) => {
  const soundKitsItems = kits.map(kit => kit.image);
  return <div>Sound Kits</div>;
};

export default SoundKits;
