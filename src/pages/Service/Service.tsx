import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import BuyButton from 'components/BuyButton/BuyButton';
import Preloader from 'components/Preloader/Preloader';
import ShareButton from 'components/ShareButton/ShareButton';
import useTypedSelector from 'hooks/redux/useTypedDispatch';
import useActions from 'hooks/useActions';
import * as serviceDetailsSelectors from 'reduxStore/service-details/selectors';

import * as S from './Service.style';

const Service = () => {
  const params = useParams();
  const service = useTypedSelector(serviceDetailsSelectors.serviceDetails);
  const { getService } = useActions();

  useEffect(() => {
    getService(Number(params.id));
  }, []);

  return (
    <S.Service>
      <S.Container>
        {!service ? (
          <Preloader />
        ) : (
          <S.Content>
            <S.Thumbnail src={service.image} />
            <S.ServiceInfo>
              <S.TitleContainer>
                <S.Title>{service.title}</S.Title>
                <S.Subtitle>Collaboration by someone</S.Subtitle>
              </S.TitleContainer>
              <S.Description>{service.description}</S.Description>
              <S.Actions>
                <S.Action>
                  <BuyButton price={service.price} details={service} />
                </S.Action>
                <S.Action>
                  <ShareButton product={service} />
                </S.Action>
              </S.Actions>
            </S.ServiceInfo>
          </S.Content>
        )}
      </S.Container>
    </S.Service>
  );
};

export default Service;
