import { FC } from 'react';
import { Membership } from '../../redux/memberships/types';
import * as S from './MembershipList.style';

type Props = {
  memberships: Membership[];
};

const MembershipList: FC<Props> = ({ memberships }) => {
  const membershipCards = memberships.map(membership => (
    <S.MembershipCard key={membership.id}>
      <S.Title>{membership.title}</S.Title>
    </S.MembershipCard>
  ));

  return <S.MembershipList>{membershipCards}</S.MembershipList>;
};

export default MembershipList;
