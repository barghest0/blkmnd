type Service = {
  id: number;
  title: string;
  description: string;
  type: string;
  price: number;
  image: string;
};

type ServiceDetailsState = {
  service: Service | null;
  isFetching: boolean;
  errors: any | null;
};

export { ServiceDetailsState, Service };
