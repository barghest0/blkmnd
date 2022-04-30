type Tag = {
  name: string;
};

type Beat = {
  title: string;
  bpm: number;
  accord: string;
  date: string;
  tags: Tag[];
  price: number;
  time: string;
  author: string;
  track: string;
};

export { Beat, Tag };
