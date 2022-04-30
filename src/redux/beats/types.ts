type Tag = {
  name: string;
};

type Bit = {
  title: string;
  bpm: number;
  accord: string;
  date: string;
  tags: Tag[];
  price: number;
  time: string;
};

export { Bit, Tag };
