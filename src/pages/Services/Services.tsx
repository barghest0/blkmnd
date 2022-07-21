import { useEffect } from 'react';

import ServiceCard from 'components/ServiceCard/ServiceCard';
import Preloader from 'components/Preloader/Preloader';
import useTypedSelector from 'hooks/redux/useTypedDispatch';
import useActions from 'hooks/useActions';
import * as servicesSelectors from 'reduxStore/services/selectors';

import * as S from './Services.style';

const Services = () => {
  const { getAllServices } = useActions();
  const services = useTypedSelector(servicesSelectors.allServices);
  const isServicesFetching = useTypedSelector(
    servicesSelectors.isServicesFetching,
  );

  const servicesCards = services.map((service) => (
    <ServiceCard service={service} key={service.id} />
  ));

  useEffect(() => {
    getAllServices();
  }, []);

  return (
    <S.Services>
      <S.Container>
        <S.Title>Services</S.Title>
        <S.ServicesList>
          {isServicesFetching ? <Preloader /> : servicesCards}
        </S.ServicesList>
      </S.Container>
    </S.Services>
  );
};

export default Services;
