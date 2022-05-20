import { FC } from 'react';
import { Membership } from '../../redux/memberships/types';
import { RouterPaths } from '../../shared/router/types';
import { ButtonLink } from '../../shared/styles/links';
import * as S from './MembershipCard.style';

type Props = {
  membership: Membership;
};

const MembershipCard: FC<Props> = ({ membership }) => {
  const { title, details } = membership;

  return (
    <S.MembershipCard>
      <S.Title>{title}</S.Title>
      <S.Details>{details}</S.Details>
      <S.Join>
        <ButtonLink to={`${RouterPaths.membership}/${membership.id}`}>
          Join now
        </ButtonLink>
      </S.Join>
    </S.MembershipCard>
  );
};

export default MembershipCard;
