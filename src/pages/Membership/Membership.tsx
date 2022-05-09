import { useEffect } from 'react';
import MembershipList from '../../components/MembershipList/MembershipList';
import Preloader from '../../components/Preloader/Preloader';
import useTypedSelector from '../../hooks/redux/useTypedDispatch';
import useActions from '../../hooks/useActions';
import * as S from './Membership.style';

const Membership = () => {
  const { getMemberships } = useActions();
  const { memberships, isFetching } = useTypedSelector(
    state => state.memberships,
  );

  useEffect(() => {
    getMemberships();
  }, []);

  return (
    <S.Membership>
      <S.Container>
        <S.Title>Membership</S.Title>
        <S.MembershipList>
          {isFetching ? (
            <Preloader />
          ) : (
            <MembershipList memberships={memberships} />
          )}
        </S.MembershipList>
      </S.Container>
    </S.Membership>
  );
};

export default Membership;
