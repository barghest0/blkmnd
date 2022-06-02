import { useEffect } from 'react';
import MembershipCard from '../../components/MembershipCard/MembershipCard';
import Preloader from '../../components/Preloader/Preloader';
import useTypedSelector from '../../hooks/redux/useTypedDispatch';
import useActions from '../../hooks/useActions';
import * as S from './Membership.style';
import * as membershipsSelectors from '../../redux/memberships/selectors';

const Membership = () => {
  const { getMemberships } = useActions();
  const memberships = useTypedSelector(membershipsSelectors.allMemberships);
  const isMembershipsFetching = useTypedSelector(
    membershipsSelectors.isFetching,
  );

  const membershipsCard = memberships.map(membership => (
    <MembershipCard membership={membership} key={membership.id} />
  ));

  useEffect(() => {
    getMemberships();
  }, []);

  return (
    <S.Membership>
      <S.Container>
        <S.Title>Membership</S.Title>
        <S.MembershipList>
          {isMembershipsFetching ? <Preloader /> : membershipsCard}
        </S.MembershipList>
      </S.Container>
    </S.Membership>
  );
};

export default Membership;
