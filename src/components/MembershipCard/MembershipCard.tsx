import { FC } from 'react';
import { Membership } from '../../redux/memberships/types';
import * as S from './MembershipCard.style';

type Props = {
  membership: Membership;
};

const MembershipCard: FC<Props> = ({ membership }) => {
  const { title } = membership;

  return (
    <S.MembershipCard key={membership.id}>
      <S.Title>{title}</S.Title>
    </S.MembershipCard>
  );
};

export default MembershipCard;
